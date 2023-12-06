import { useLocation } from "react-router-dom"
import './Navbar.css'
export default function NavBar() {
    // const location = useLocation()
    // const result = location.state
    // console.log(result)
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">MovieList</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

            </div>

        </nav>
    )
}