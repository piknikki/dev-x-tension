import React from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";
import styled from "styled-components";
import {
    Nav,
    NavLink
} from 'reactstrap';

const CategoryStyles = styled.div`
    .nav-item {
        display: inline;
        color: #22FA93;
        font-family: 'Quicksand', serif;
        list-style-type: none;
        font-size: 1.2rem;
    }

    .nav-item:hover {
        color: #0AE0FF;
        list-style-type: none;
    }
    
    .categories {
        padding: 30px 0;
        color: #22FA93;
    }
    
`


function Header(props) {

        return (
            <CategoryStyles>
                    <Nav className="ml-auto categories">

                        <NavLink
                            data-category="all"
                            className="nav-item"
                            onClick={() => window.location.reload()}
                                >
                                    <h3>All</h3>

                            </NavLink>

                            <NavLink
                                    data-category="learn"
                                    className="nav-item"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Learn</h3>
                            </NavLink>

                            <NavLink
                                    className="nav-item"
                                    data-category="teach"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Teach</h3>

                            </NavLink>

                            <NavLink
                                    className="nav-item"
                                    data-category="rant"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Rant</h3>

                            </NavLink>

                            <NavLink
                                    className="nav-item"
                                    data-category="success"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Success</h3>

                            </NavLink>

                            <NavLink
                                    className="nav-item"
                                    data-category="tipstricks"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Tips/Tricks</h3>

                            </NavLink>

                            <NavLink
                                    className="nav-item"
                                    data-category="dadjokes"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Dad Jokes</h3>

                            </NavLink>

                        <NavLink
                                    className="nav-item"
                                    data-category="popular"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Popular</h3>

                            </NavLink>


                        </Nav>

            </CategoryStyles>
    );
}

export default withRouter(Header);


