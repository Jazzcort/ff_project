import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleInput = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(value));
    if (error.username === "" && error.password === "") {
      axios
        .post("http://localhost:7777/login", value)
        .then((res) => {
          if (res.data.message === "Success") {
            const id = res.data.userId;
            navigate(`/home/${id}`);
          } else {
            alert("Wrong username or password");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h3>***Movie Mania***</h3>
        <h4 className="bg-warning">Log-In</h4>
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
            Log in
          </button>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
