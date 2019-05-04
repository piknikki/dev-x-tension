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
                                    {/*to={`/category/${this.state.category}`}>*/}
                                    <h3>Learn</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    <h3>Teach</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    <h3>Rant</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    <h3>Successes</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    <h3>Tips/Tricks</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/category" }
                                    to="/category">
                                    <h3>Dad Jokes</h3>
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