import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

function Header() {
    return (
        <header className="bg-white float-none justify-center py-2">
            {/*<div className="container md:flex md:items-center md:justify-between mx-auto px-4">*/}
                <div className="flex">
                    <div className="w-1/5 transparent"> </div>
                    <div className="w-3/5 px-2">
                        <ul className="py-6 md:flex justify-center justify-between list-reset text-2xl ">
                            <li className="md:ml-4 list-reset">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Learn
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Teach
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Rant
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Successes
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Tips/Tricks
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    Dad Jokes
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="w-1/5 transparent"> </div>
                {/*</div>*/}
            </div>
        </header>
    );
}

export default Header;