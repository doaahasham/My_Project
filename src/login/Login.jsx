import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  // Track password and username validation errors dynamically
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // Username validation rules
  const validateUsername = (username) => {
    if (username.trim() === "") {
      return "Username is required";
    }

    if (username.length < 3) {
      return "Username must be at least 3 characters";
    }

    if (username.length > 20) {
      return "Username must not exceed 20 characters";
    }

    const regex = /^[a-zA-Z0-9_]+$/;

    if (!regex.test(username)) {
      return "Username can only contain letters, numbers, and underscore";
    }

    return "";
  };

  const validatePassword = (password) => {
    if (password.length === 0) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Za-z]/.test(password)) {
      return "Password must include at least one letter.";
    }
    if (!/\d/.test(password)) {
      return "Password must include at least one number.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must include at least one special character.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: updatedValue,
    });

    let fieldErrors = { ...errors };

   
    if (type !== "checkbox" && /\s/.test(value)) {
      fieldErrors[name] = "Spaces are not allowed.";
      setErrors(fieldErrors);
      return;
    } else {
      fieldErrors[name] = "";
    }

    if (name === "username") {
      fieldErrors.username = validateUsername(updatedValue);
    }

    if (name === "password") {
      fieldErrors.password = validatePassword(updatedValue);
    }

    setErrors(fieldErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let fieldErrors = {
      username: validateUsername(formData.username),
      password: validatePassword(formData.password),
    };

    if (fieldErrors.username || fieldErrors.password) {
      setErrors(fieldErrors);
      return; 
    }

    console.log("Login form processed successfully:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">sign in</h2>

        {/* Social buttons */}
        <div className="social">
          <button className="fb">Sign in with Facebook</button>
          <button className="google">Sign in with Google+</button>
        </div>

        <div className="or">Or</div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Username Input Field */}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            className={errors.username ? "is-invalid error-border" : ""}
            style={errors.username ? { borderColor: "#dc3545", color: "#dc3545" } : {}}
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <div className="error-text" style={{ color: "#dc3545", fontSize: "13px", fontWeight: "bold", margin: "-10px 0 15px 5px", textAlign: "left" }}>
              {errors.username}
            </div>
          )}

          {/* Password Input Field */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={errors.password ? "is-invalid error-border" : ""}
            style={errors.password ? { borderColor: "#dc3545", color: "#dc3545" } : {}}
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <div className="error-text" style={{ color: "#dc3545", fontSize: "13px", fontWeight: "bold", margin: "-10px 0 15px 5px", textAlign: "left" }}>
              {errors.password}
            </div>
          )}

          <div className="remember">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
            />
            <label>Remember Me</label>
          </div>

          <button className="login-btn">Sign In</button>

          <p className="forgot">Forget Password?</p>

          <button
            className="signup-btn"
            type="button"
            onClick={() => navigate("/register")}
          >
            Sign Up New Account
          </button>
        </form>
      </div>
    </div>
  );
}