import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// ✅ GLOBAL AXIOS CONFIG (runs once)
axios.defaults.withCredentials = true;

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
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}api/auth/user/verify`
      );

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

  const authUser = (userData) => {
    if (userData) {
      setUser(userData);
      setIsAuthenticated(true);
      setAuthVerifying(false);
      setLoading(false);
      return Promise.resolve();
    } else {
      // If no userData provided, re-verify from server (useful after login)
      return verifyUser();
    }
  };

  const logoutUser = async () => {
    try {
      // backend exposes GET /logout — use GET to clear the cookie correctly
      await axios.get(`${process.env.REACT_APP_API_URL}api/auth/user/logout`, { withCredentials: true });
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
