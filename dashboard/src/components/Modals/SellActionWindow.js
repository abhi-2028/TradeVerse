import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useGeneralContext } from "../../context/GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid, price }) => {
  const [qty, setQty] = useState(1);
  const [sellPrice, setSellPrice] = useState(price);

  const { closeSellWindow } = useGeneralContext();

  useEffect(() => {
    setSellPrice(price);
  }, [price]);

  const handleSellClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3002/api/user/new-order",
        {
          name: uid,
          qty: Number(qty),
          price: Number(sellPrice),
          mode: "SELL",
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Sell order failed:", err);
    }

    closeSellWindow();
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <h3 style={{ textAlign: "center" }}>Sell {uid}</h3>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={sellPrice}
              disabled
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Amount credited ₹{(qty * sellPrice).toFixed(2)}
        </span>

        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
