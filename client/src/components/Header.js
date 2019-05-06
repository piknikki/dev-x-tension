import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../css/styles.css";
// import API from "../utils/API";



class Header extends Component {

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

    render() {
        return (
            <header className="bg-white float-none justify-center py-2">
                <div className="flex">
                    <div className="w-1/5 transparent"> </div>
                    <div className="w-3/5 px-2">
                        <ul className="py-6 md:flex justify-center justify-between list-reset text-2xl ">

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Learn</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Teach</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Rant</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Successes</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Tips/Tricks</h3>
                                </NavLink>
                            </li>

                            <li className="md:ml-4">
                                <NavLink
                                    className="no-underline text-green-light hover:text-blue-light"
                                    activeClassName="active"
                                    isActive={ () => window.location.pathname === "/posts" }
                                    to="/posts/category"
                                >
                                    <h3>Dad Jokes</h3>
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                    <div className="w-1/5 transparent"> </div>
                </div>
            </header>
    )};
}

export default withRouter(Header);


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



