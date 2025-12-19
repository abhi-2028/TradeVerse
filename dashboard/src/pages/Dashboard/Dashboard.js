import React from "react";
import { Route, Routes } from "react-router-dom";

// import Apps from "./Apps";
import Funds from "../../components/UI/Funds";
import Holdings from "../Dashboard/Holdings";
import Orders from "../Dashboard/Orders";
import Positions from "../Dashboard/Positions";
import Summary from "../Dashboard/Summary";
import WatchList from "../Dashboard/WatchList";
import {GeneralContextProvider} from "../../context/GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          {/* <Route path="/apps" element={<Apps />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
