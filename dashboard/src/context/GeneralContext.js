import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authVerifying, setAuthVerifying] = useState(true);

  const [buyStock, setBuyStock] = useState(null);
  const [sellStock, setSellStock] = useState(null);

  const [user, setUser] = useState(null);

  // 🔐 Verify auth on app load
  const verifyUser = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3002/api/auth/user/verify",
        { withCredentials: true }
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
    setUser(userData);
    setIsAuthenticated(true);
    setAuthVerifying(false);
    setLoading(false);
  };

  const logoutUser = async () => {
    try {
      await axios.post(
        "http://localhost:3002/api/auth/user/logout",
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
      setAuthVerifying(false);
      setLoading(false);
    }
  };

  // ✅ FIXED: store FULL stock object
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
