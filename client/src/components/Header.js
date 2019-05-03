import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

function Header() {
    return (
        <header className="bg-white py-2">
            <div className="container md:flex md:items-center md:justify-between mx-auto px-4">
                <ul className="md:flex md:items-center list-reset text-2xl ">
                    <li className="md:ml-4 list-reset">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "#" }
                            to="#">
                            Learn
                        </NavLink>
                    </li>

                    <li className="md:ml-4">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "#" }
                            to="#">
                            Teach
                        </NavLink>
                    </li>

                    <li className="md:ml-4">
                        <NavLink
                            className="no-underline text-green-light hover:text-blue-light"
                            activeClassName="active"
                            isActive={ () => window.location.pathname === "#" }
                            to="#">
                            Rant
                        </NavLink>
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;