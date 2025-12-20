import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tooltip, Grow } from "@mui/material";
import { useGeneralContext } from "../../context/GeneralContext";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  const DEFAULT_WATCHLIST = [
  { name: "INFY", price: 1450, percent: "+1.2%", isDown: false },
  { name: "TCS", price: 3800, percent: "-0.4%", isDown: true },
  { name: "RELIANCE", price: 2500, percent: "+0.9%", isDown: false },
  { name: "NIFTY 50", price: 22400, percent: "+0.6%", isDown: false },
];
  const [watchlist, setWatchlist] = useState(DEFAULT_WATCHLIST);
  const [search, setSearch] = useState("");

  useEffect(() => {
  axios
    .get("http://localhost:3002/api/user/watchlist")
    .then((res) => {
      if (res.data && res.data.length > 0) {
        setWatchlist(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}, []);


  const filteredList = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: infy, nifty, gold mcx"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts">{filteredList.length} / 50</span>
      </div>

      <ul className="list">
        {filteredList.map((stock) => (
          <WatchListItem key={stock._id || stock.name } stock={stock} />
        ))}
      </ul>
    </div>
    </>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions stock={stock} />}
    </li>
  );
};


const WatchListActions = ({ stock }) => {
  const { openBuyWindow } = useGeneralContext();

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow TransitionComponent={Grow}>
          <button
            className="buy"
            onClick={() => openBuyWindow(stock.name)}
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
