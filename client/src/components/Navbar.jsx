import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import axios from "axios";
export default function NavBar() {
  const { id, listId } = useParams()
  const [user, setUser] = useState(null)
  if (id) {
    axios.post('http://localhost:7777/getUserName', { id }).then(res => {
      setUser(res.data.username)
    })
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-black">
      <div className="container-fluid">
        <a href={id ? `/mylist/${id}`: '/login'} className="navbar-brand">
          MovieList
        </a>
        
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              {!id && <a className="nav-link" href="/login">Log in</a>}
            </li>
            <li className="nav-item" id="test">
              {id && <a className="nav-link" href="/">Log out</a>}
            </li>
          </ul>
          {user && <p id="gg">Hi! {user}</p>}
        </div>
      </div>
    </nav>
  );
}
