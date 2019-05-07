import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";
import API from "../utils/API";
import axios from "axios";


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    // get the posts and change the state to reflect the data
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
            .then(res =>
                this.setState({ posts: res.data/*, title: "", author: "", body: "", category: "", numLikes: 0 */})
            )
            .catch(err => console.log(err));
    };

    handleButtonClick = (event) => {
        event.preventDefault();

        var category = event.target.getAttribute("data-category") || event.target.parentNode.getAttribute("data-category");
        category = category.toLowerCase();
        // const newState = { ...this.state };
        // axios.get(`/api/posts/${category}`)
        // API.getCategory(category)
        // .then(res => console.log(res.data));
        console.log(category);
        var filteredArray = [];
        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i].category === category) {
                filteredArray.push(this.state.posts[i]);
            }
    }
    console.log(filteredArray);
}

render() {
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
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/learn"
                                data-category="learn"
                                onClick={this.handleButtonClick}
                                >
                                {/*to={`/category/${this.state.category}`}>*/}
                                <h3>Learn</h3>
                            </NavLink>
                        </li>

                        <li className="md:ml-4">
                            <NavLink
                                className="no-underline text-green-light hover:text-blue-light"
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/teach"
                                data-category="teach"
                                onClick={this.handleButtonClick}
                                >
                                <h3>Teach</h3>
                            </NavLink>
                        </li>

                        <li className="md:ml-4">
                            <NavLink
                                className="no-underline text-green-light hover:text-blue-light"
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/rant"
                                data-category="rant"
                                onClick={this.handleButtonClick}
                                >
                                <h3>Rant</h3>
                            </NavLink>
                        </li>

                        <li className="md:ml-4">
                            <NavLink
                                className="no-underline text-green-light hover:text-blue-light"
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/successes"
                                data-category="successes"
                                onClick={this.handleButtonClick}
                                >
                                <h3>Successes</h3>
                            </NavLink>
                        </li>

                        <li className="md:ml-4">
                            <NavLink
                                className="no-underline text-green-light hover:text-blue-light"
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/tipstricks"
                                data-category="tipstricks"
                                onClick={this.handleButtonClick}
                                >
                                <h3>Tips/Tricks</h3>
                            </NavLink>
                        </li>

                        <li className="md:ml-4">
                            <NavLink
                                className="no-underline text-green-light hover:text-blue-light"
                                // activeClassName="active"
                                // isActive={() => window.location.pathname === "/category"}
                                to="/post/dadjokes"
                                data-category="dadjokes"
                                onClick={this.handleButtonClick}
                                >
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
}

export default Header;