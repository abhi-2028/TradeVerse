import { createContext, useState, useEffect, useContext } from "react";
import API from "../api/axios";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authVerifying, setAuthVerifying] = useState(true);

  const [buyStock, setBuyStock] = useState(null);
  const [sellStock, setSellStock] = useState(null);
  const [user, setUser] = useState(null);

  // 🔐 Verify user on app load
  const verifyUser = async () => {
    try {
      const res = await API.get("/api/auth/user/verify");

      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setAuthVerifying(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);

  const authUser = async (userData) => {
    if (userData) {
      setUser(userData);
      setIsAuthenticated(true);
      setAuthVerifying(false);
      setLoading(false);
    } else {
      await verifyUser();
    }
  };

  const logoutUser = async () => {
    try {
      await API.get("/api/auth/user/logout");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      setAuthVerifying(false);
      setLoading(false);
    }
  };

  const openBuyWindow = (stock) => setBuyStock(stock);
  const closeBuyWindow = () => setBuyStock(null);

  const openSellWindow = (stock) => setSellStock(stock);
  const closeSellWindow = () => setSellStock(null);

  if (loading || authVerifying) return null;

  return (
    <GeneralContext.Provider
      value={{
        isAuthenticated,
        user,
        buyStock,
        sellStock,
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        authUser,
        logoutUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);
