const {HoldingsModel} = require("../model/HoldingsModel");
const {PositionsModel} = require("../model/PositionsModel");
const {OrdersModel} = require("../model/OrdersModel");

async function allHoldings(req,res) {
     let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
}

async function allPositions(req,res) {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}

async function allOrders(req,res) {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
}

async function newOrder(req,res) {
    let newOrder = new OrdersModel({
        user: req.user._id,
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    });

    newOrder.save();
    res.send("Order Saved!");
}

module.exports = {
    allHoldings,
    allPositions,
    allOrders,
    newOrder
}