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



// onClick={this.setState({isFiltered: true})}
//
// {this.state.categories.map(category =>
//     <li
//         id={this.state.category}
//         key={this.state.category}
//         className="md:ml-4 list-reset"
//     >
//         <Link
//             className="no-underline text-green-light hover:text-blue-light"
//
//             to={`/posts/${this.state.category}`}
//         >
//
//             <h3>{this.state.category}</h3>
//         </Link>
//     </li>
// )}

// constructor(props) {
//     super(props)
//     this.state = {
//         categories: [],
//     }
// }
//
// componentDidMount() {
//     this.getCategories();
// }
//
// getCategories = (props) => {
//     API.getPosts(this.props.match.params.category)
//         .then(res =>
//             this.setState({ posts: res.data, title: "", author: "", body: "", category: "", numLikes: "" })
//         )
//         .catch(err => console.log(err));
// };

//

// handleButtonClick = (event) => {
//     event.preventDefault();
//
//     const category = event.target.getAttribute("data-category") || event.target.parentNode.getAttribute("data-category");
//     // const newState = { ...this.state };
//
//     // console.log(event.target);
//     console.log(category);
//
//
//
// };


