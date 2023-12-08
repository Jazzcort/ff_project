import "./App.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";

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
      <h1 className="col-sm-6 offset-sm-3">Welcome to MovieList</h1>
      <button className="btn btn-light" onClick={handleSubmit}>
        Start Searching !!
      </button>
    </div>
  );
}

export default App;
