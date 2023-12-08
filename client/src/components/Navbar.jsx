import { useParams, useLocation } from "react-router-dom";
import "./Navbar.css";
export default function NavBar() {
  console.log(useParams());
  // const location = useLocation()
  // const result = location.state
  // console.log(result)
  return (
    <nav className="navbar navbar-expand-lg bg-body-black">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          MovieList
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
