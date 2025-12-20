import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/auth.css";
import { useGeneralContext } from "../../context/GeneralContext";

const Login = () => {
  const navigate = useNavigate();
  const {authUser} = useGeneralContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await axios.post(
        "http://localhost:3002/api/auth/user/login",
        data,
        { withCredentials: true }
      );

      authUser();
      navigate("/");
    } catch (err) {
      if (err.response?.status === 400) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">
          Login to access your dashboard
        </p>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form className="auth-form" onSubmit={handleForm}>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />

          <button className="auth-button" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
