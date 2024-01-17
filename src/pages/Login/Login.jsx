import React, { useState } from "react";
import { supabase } from "./client";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
      <h3>Log In</h3>{" "}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        ></input>
        <small id="emailHelp" className="form-text text-muted"></small>
      </div>
      <br></br>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <br></br>
      <br></br>
      Dont have an Account? <Link to="/signup">SignUp</Link>
    </form>
  );
};
export default Login;
