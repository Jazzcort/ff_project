import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import './RootLayout.css'

export default function RootLayout() {
    return (
        <div className="rootLayout">
            <NavBar/>
            <Outlet/>
        </div>
    )
}