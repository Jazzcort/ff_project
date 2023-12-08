import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [value, setValue] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(value));
    if (error.username === "" && error.email === "" && error.password === "") {
      axios
        .post("http://localhost:7777/signup", value)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h3>***Movie Mania***</h3>
        <h4 className="bg-info">Sign-Up</h4>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              className="form-control rounded-0"
              type="username"
              placeholder="Enter username"
              name="username"
              onChange={handleInput}
            />
            {error.username && <p className="text-danger">{error.username}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="form-control rounded-0"
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleInput}
            />
            {error.email && <p className="text-danger">{error.email}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              className="form-control rounded-0"
              type="password"
              placeholder="Enter username"
              name="password"
              onChange={handleInput}
            />
            {error.password && <p className="text-danger">{error.password}</p>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign up
          </button>
          <p>You agree with our terms and policies</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            I already have an account
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;
