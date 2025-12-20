import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create context
const GeneralContext = createContext();

// Provider
export const GeneralProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Verify user (auth check)
  const verifyUser = async () => {
    try {
      await axios.get(
        "http://localhost:3002/api/auth/user/verify",
        { withCredentials: true }
      );
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  // Run once when app loads
  useEffect(() => {
    verifyUser();
  }, []);

  //set authenticated to true after login
  const authUser = () => {
    setIsAuthenticated(true);
  };

  // Global UI action (used in WatchList)
  const openBuyWindow = (uid) => {
    console.log("Buy clicked for:", uid);
  };

  return (
    <GeneralContext.Provider
      value={{
        isAuthenticated,
        loading,
        openBuyWindow,
        authUser,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

// Custom hook
export const useGeneralContext = () => useContext(GeneralContext);
