import "./App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import { FaEye } from "react-icons/fa6";
import { MdLocalMovies } from "react-icons/md";

function App() {
  function apiCall() {
    axios.get("http://localhost:7777/artists").then((data) => {
      console.log(data.data[11]);
    });
  }
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7777/createDefaultList", { userId: id })
      .then((res) => {
        //const listId = res.data.listId;
        navigate(`/mylist/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App row align-items-center">
      <h1 className="col-sm-6 offset-sm-3">** Welcome to Movie Mania **</h1>
      <div className="spinner">
        <div className="spinner-icon">
          <MdLocalMovies className="spin" />
        </div>
      </div>
      <button className="btn btn-light" onClick={handleSubmit}>
        <FaEye className="me-2 text-dark fs-1 text" />
        <b>View My List</b>
      </button>
    </div>
  );
}

export default App;
