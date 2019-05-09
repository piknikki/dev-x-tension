import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

const Nav = () => {
    return (
        <header className="bg-blue-darker py-4 px-4 shadow-lg leading-normal">
            <div className="container md:flex md:items-center md:justify-between mx-auto px-2">
                <div className="container">
                        <img id="app-logo" className="float-left clearfix mx-auto px-4" src={process.env.PUBLIC_URL + '/images/dxt.png'} alt="dxt logo" />
                        <h1 id="logoname" className="flex mb-4 text-blue-light text-3xl text-left align-middle mx-auto py-2 ">dev X-Tension</h1>

                </div>
                <div className="container">
                <ul className="md:flex md:items-center px-3 list-reset text-xl">

                    <li className="md:ml-4 mx-2">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/" }
                            to="/"
                            onClick={() => this.props.history.push("/")}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="md:ml-4  mx-2">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/new" }
                            to="/new">
                            New Post
                        </NavLink>
                    </li>

                    <li className="md:ml-4  mx-2">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/about" }
                            to="/about">
                            About
                        </NavLink>
                    </li>

                    <li className="md:ml-4  mx-2">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "/signup" }
                            to="/signup">
                            Sign-Up
                        </NavLink>
                    </li>

                </ul>
                </div>
            </div>
        </header>
    )
}

export default Nav;














