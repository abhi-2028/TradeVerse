import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/user/summary",
          { withCredentials: true }
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Error loading summary</p>;

  return (
    <>
      <div className="username">
        <h6>Hi, {data.user.username}!</h6>
        <hr className="divider" />
      </div>

      {/* Equity */}
      <div className="section">
        <span><p>Equity</p></span>
        <div className="data">
          <div className="first">
            <h3>{(data.equity.availableMargin / 1000).toFixed(2)}k</h3>
            <p>Margin available</p>
          </div>
          <hr />
          <div className="second">
            <p>Margins used <span>{data.equity.usedMargin}</span></p>
            <p>Opening balance <span>{data.equity.openingBalance / 1000}k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Holdings */}
      <div className="section">
        <span><p>Holdings ({data.holdings.count})</p></span>
        <div className="data">
          <div className="first">
            <h3 className={data.holdings.pnl >= 0 ? "profit" : "loss"}>
              {data.holdings.pnl / 1000}k
              <small> ({data.holdings.pnlPercent}%)</small>
            </h3>
            <p>P&amp;L</p>
          </div>
          <hr />
          <div className="second">
            <p>Current Value <span>{data.holdings.currentValue / 1000}k</span></p>
            <p>Investment <span>{data.holdings.investment / 1000}k</span></p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
