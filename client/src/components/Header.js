import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

const Header = () => {
    return (
        <header className="bg-blue-darker py-6 shadow-lg">
            <div className="container md:flex md:items-center md:justify-between mx-auto px-4">
                <img id="app-logo" className="A" src={process.env.PUBLIC_URL + '/images/dxt.png'} alt="dxt logo" />
                <h1 id="logoname" className="text-2xl">dev X-Tension</h1>
                <ul className="navbar-nav">
                    <li className="nav-link">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/" }
                            to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink
                            className="nav-link"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/new" }
                            to="/new">
                            New Post
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;