import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import { useGeneralContext } from "../context/GeneralContext";

function AppRoutes() {
  const { isAuthenticated, loading } = useGeneralContext();

  if (loading) {
    return <div>Checking authentication...</div>;
  }

  return (
    <Routes>
      {/* PROTECTED HOME */}
      <Route
        path="/"
        element={
          isAuthenticated ? <Home /> : <Navigate to="/login" replace />
        }
      />

      {/* PUBLIC ROUTES */}
      <Route
        path="/login"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login />
        }
      />

      <Route
        path="/signup"
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <Signup />
        }
      />
    </Routes>
  );
}

export default AppRoutes;
