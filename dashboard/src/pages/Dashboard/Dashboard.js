import React from "react";
import { Route, Routes } from "react-router-dom";

import Funds from "../../components/UI/Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import BuyActionWindow from "../../components/Modals/BuyActionWindow";
import SellActionWindow from "../../components/Modals/SellActionWindow";

import { GeneralProvider, useGeneralContext } from "../../context/GeneralContext";

const DashboardLayout = () => {
  const { buyStock, sellStock } = useGeneralContext();

  return (
    <div className="dashboard-container">
      <WatchList />

      {/* ✅ BUY WINDOW */}
      {buyStock && (
        <BuyActionWindow
          uid={buyStock.name}
          price={buyStock.price}
        />
      )}

      {/* ✅ SELL WINDOW */}
      {sellStock && (
        <SellActionWindow
          uid={sellStock.name}
          price={sellStock.price}
        />
      )}

      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <GeneralProvider>
      <DashboardLayout />
    </GeneralProvider>
  );
};

export default Dashboard;
