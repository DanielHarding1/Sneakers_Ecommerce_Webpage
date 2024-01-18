import React, { useState } from "react";
import { supabase } from "./client";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((preFormData) => {
      return {
        ...preFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      console.log(data);

      setToken(data.session.access_token);

      navigate("/homepage");

      if (error) {
        throw error;
      }
      alert("Login Sucessful!");
    } catch (error) {
      alert("Login Not Successful");
    }
  }

  return (
    <form id="signup" onSubmit={handleLogin}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-7 intro-section">
            <div className="brand-wrapper">
              <h1>
                <a href="https://stackfindover.com/">Logo</a>
              </h1>
            </div>
            <div className="intro-content-wrapper">
              <h1 className="intro-title"></h1>
              <p className="intro-text"></p>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 form-section">
            <div className="login-wrapper">
              <h2 className="login-title">Login</h2>

              <div className="form-group">
                <label htmlFor="email" className="sr-only"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password" className="sr-only"></label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <button>Login</button>
                <a href="#!" className="forgot-password-link">
                  Password?
                </a>
              </div>
              <p className="login-wrapper-footer-text">
                {" "}
                Don't Have an Account? <Link to="/SignUp">SignUp</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
