import React, { useState } from "react";
import axios from "axios";
import { useGeneralContext } from "../../context/GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const { closeSellWindow } = useGeneralContext();

  const handleSell = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:3002/api/user/new-order",
      {
        name: uid,
        qty: Number(qty),
        price: Number(price),
        mode: "SELL",
      },
      { withCredentials: true }
    );

    closeSellWindow();
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>Sell {uid}</h3>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty</legend>
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Amount credited after sell</span>
        <div>
          <button className="btn btn-blue" onClick={handleSell}>Sell</button>
          <button className="btn btn-grey" onClick={closeSellWindow}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
