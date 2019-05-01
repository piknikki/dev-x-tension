import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <h1>This is the Header</h1>
            <Link className="navbar-brand" to="/">Logogoeshere</Link>
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
    )
}

export default Header;