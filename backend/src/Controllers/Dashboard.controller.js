const {HoldingsModel} = require("../model/HoldingsModel");
const {PositionsModel} = require("../model/PositionsModel");
const {OrdersModel} = require("../model/OrdersModel");
const {WatchListModel } = require("../model/WatchListModel");

async function allHoldings(req, res) {
  try {
    const holdings = await HoldingsModel.find({ user: req.user._id });
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
}


async function allPositions(req, res) {
  try {
    const positions = await PositionsModel.find({ user: req.user._id });
    res.json(positions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
}


async function allOrders(req, res) {
  try {
    const orders = await OrdersModel.find({ user: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
}


async function newOrder(req, res) {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user._id;

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({ message: "Invalid order mode" });
    }

    const quantity = Number(qty);
    const orderPrice = Number(price);

    /* ==========================
       1️⃣ SAVE ORDER (HISTORY)
    ========================== */
    await OrdersModel.create({
      user: userId,
      name,
      qty: quantity,
      price: orderPrice,
      mode,
    });

    /* ==========================
       2️⃣ UPDATE POSITIONS
    ========================== */
    let position = await PositionsModel.findOne({
      user: userId,
      name,
    });

    if (!position) {
      // First trade → create position
      position = await PositionsModel.create({
        user: userId,
        product: "MIS", // hardcoded for now
        name,
        qty: mode === "BUY" ? quantity : -quantity,
        avg: orderPrice,
        price: orderPrice, // LTP
        net: "0%",
        day: "0%",
        isLoss: false,
      });
    } else {
      if (mode === "BUY") {
        const totalQty = position.qty + quantity;
        const newAvg =
          (position.avg * position.qty + orderPrice * quantity) / totalQty;

        position.qty = totalQty;
        position.avg = newAvg;
      }

      if (mode === "SELL") {
        position.qty -= quantity;
      }

      // Update LTP
      position.price = orderPrice;

      // Net / Day P&L %
      const pnlPercent =
        ((position.price - position.avg) / position.avg) * 100;

      position.net = `${pnlPercent.toFixed(2)}%`;
      position.day = position.net;
      position.isLoss = pnlPercent < 0;

      // Close position if quantity becomes zero
      if (position.qty === 0) {
        await PositionsModel.deleteOne({ _id: position._id });
      } else {
        await position.save();
      }
    }

    /* ==========================
       3️⃣ UPDATE HOLDINGS
    ========================== */
    let holding = await HoldingsModel.findOne({
      user: userId,
      name,
    });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + quantity;
        const newAvg =
          (holding.avg * holding.qty + orderPrice * quantity) / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = orderPrice;
        await holding.save();
      } else {
        await HoldingsModel.create({
          user: userId,
          name,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "0%",
          day: "0%",
        });
      }
    }

    if (mode === "SELL") {
      if (!holding || holding.qty < quantity) {
        return res
          .status(400)
          .json({ message: "Insufficient holdings to sell" });
      }

      holding.qty -= quantity;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        holding.price = orderPrice;
        await holding.save();
      }
    }

    return res.status(201).json({
      message: "Order placed successfully",
    });

  } catch (error) {
    console.error("Order execution error:", error);
    return res.status(500).json({
      message: "Failed to place order",
    });
  }
}


async function allWatchList(req, res) {
  try {
    const list = await WatchListModel.find({});
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch watchlist" });
  }
}

async function updateWatchList(req,res) {
  try {
    const stocks = req.body;

    if (!Array.isArray(stocks) || stocks.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body must be a non-empty array",
      });
    }

    // Optional: clear existing watchlist before seeding
    await WatchListModel.deleteMany({});

    const insertedStocks = await WatchListModel.insertMany(stocks);

    res.status(201).json({
      success: true,
      message: "Watchlist seeded successfully",
      count: insertedStocks.length,
      data: insertedStocks,
    });
  } catch (error) {
    console.error("WatchList seed error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

async function getSummary(req, res) {
  try {
    const userId = req.user._id;

    const holdings = await HoldingsModel.find({ user: userId });

    let investment = 0;
    let currentValue = 0;

    holdings.forEach((h) => {
      investment += h.avg * h.qty;
      currentValue += h.price * h.qty;
    });

    const pnl = currentValue - investment;
    const pnlPercent = investment
      ? Number(((pnl / investment) * 100).toFixed(2))
      : 0;

    res.json({
      user: {
        username: req.user.username,
      },
      equity: {
        availableMargin: 3740, // static for now
        usedMargin: 0,
        openingBalance: 3740,
      },
      holdings: {
        count: holdings.length,
        investment: Number(investment.toFixed(2)),
        currentValue: Number(currentValue.toFixed(2)),
        pnl: Number(pnl.toFixed(2)),
        pnlPercent,
      },
    });
  } catch (err) {
    console.error("Summary error:", err);
    res.status(500).json({ message: "Failed to fetch summary" });
  }
}



module.exports = {
    allHoldings,
    allPositions,
    allOrders,
    newOrder,
    allWatchList,
    updateWatchList,
    getSummary
}