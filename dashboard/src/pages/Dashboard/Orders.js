import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/api/user/orders",
      {withCredentials:true}
    )
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          {/* ✅ Go back to Summary */}
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      )}

      {allOrders.length > 0 && (
        <div className="order-table">
          <table>
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th></th>
                <th>Quantity</th>
                <th></th>
                <th>Price</th>
                <th></th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => {
                const color = order.mode === "BUY" ? "#d8ffc6ff" : "red";
                return (
                  <tr key={index} style={{ backgroundColor: color }}>
                    <td>{order.name}</td>
                    <td></td>
                    <td>{order.qty}</td>
                    <td></td>
                    <td>{order.price}</td>
                    <td></td>
                    <td>{order.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
