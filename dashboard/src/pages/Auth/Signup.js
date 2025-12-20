import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/auth.css";
import { useGeneralContext } from "../../context/GeneralContext";


const Signup = () => {
  const navigate = useNavigate();
  const {authUser} = useGeneralContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries())

    try{
      await axios.post("http://localhost:3002/api/auth/user/signup",
        data,{withCredentials: true}
      );

      authUser();
      navigate("/");
    }catch(err){
      if (err.response?.status === 409) {
        setError("User already exists. Please login.");
      } else {
        setError("Something went wrong. Try again.");
      }
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">
          Start tracking your investments
        </p>

        {error && (
          <p style={{ color: "red", textAlign: "center" }}>
            {error}
          </p>
        )}

        <form className="auth-form" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
          />

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
            {loading? "Creating..." : "Signup"}
          </button>
        </form>

        <div className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
