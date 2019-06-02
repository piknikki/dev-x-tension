import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";
import {
    Nav,
    Collapse,
    NavbarToggler,
    Navbar,
    NavbarBrand,
    NavItem
} from 'reactstrap';

export default class NavComponent extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }


    render() {
        return (
            <div id="my-div">
                <Navbar dark>
                        <NavbarBrand href={"/"} className="clearfix">
                            <img id="app-logo" src={process.env.PUBLIC_URL + '/images/dxt.png'} alt="dxt logo"/>
                            <h1 id="logoname">dev X-Tension</h1>

                        </NavbarBrand>

                    <NavbarToggler
                        id="toggler"
                        className="toggler mr-2"

                        onClick={this.toggleNavbar} />

                   <Collapse isOpen={!this.state.collapsed} navbar>
                       <Nav className="mr-auto" navbar>

                        <NavItem>
                            <NavLink
                                className="nav-item"
                                activeclassname="active"
                                isactive={() => window.location.pathname === "/"}
                                to="/"
                                onClick={() => this.props.history.push("/")}
                            >
                                Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className="nav-item"
                                activeclassname="active"
                                isactive={() => window.location.pathname === "/new"}
                                to="/new">
                                New Post
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className="nav-item"
                                activeclassname="active"
                                isactive={() => window.location.pathname === "/about"}
                                to="/about">
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className="nav-item"
                                activeclassname="active"
                                isactive={() => window.location.pathname === "/signup"}
                                to="/signup">
                                Sign-Up
                            </NavLink>
                        </NavItem>
                       </Nav>
                   </Collapse>
                </Navbar>
            </div>
        );
    }
}















