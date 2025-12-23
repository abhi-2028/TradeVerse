import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import {useGeneralContext} from "../../context/GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const generalContext = useGeneralContext();

  const handleBuyClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/api/user/new-order", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
    {
      withCredentials:true
    });
    } catch (err) {
      console.log("Error sending order:", err);
    }

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <h3 style={{padding:"auto 0" , textAlign:"center"}}>Buy {uid}</h3>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;