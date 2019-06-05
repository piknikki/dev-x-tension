import { Button } from "reactstrap";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "../css/styles.css"
import Header from "../components/Header";
import axios from "axios";
const _ = require("lodash");


class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            filteredposts: [],
        }
    }

    // get the posts and change the state to reflect the data
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
            .then(res =>
                this.setState({ posts: res.data, title: "", author: "", body: "", category: "", numLikes: 0 })
            )
            .catch(err => console.log(err));
    };

    showNumLikesIcon = (props) => {
        let postLikes = props;

        if (postLikes >= 25) {
            return <>
                <span className="">
                    <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
                    <i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>
                    <i className="fas fa-bacon text-blue-light text-xl px-2"></i>
                    <i className="fas fa-ice-cream text-green-light text-xl px-2"></i>
                </span>
            </>
        }
        else if (postLikes >= 15) {
            return <>
                <span className="">
                    <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
                    <i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>
                    <i className="fas fa-bacon text-blue-light text-xl px-2"></i>
                </span>
            </>
        } else if (postLikes >= 7) {
            return <>
                <span className="">
                    <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
                    <i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>
                </span>
            </>
        } else if (postLikes < 7) {
            return <>
                <span className="">
                    <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
                </span>
            </>
        }

    }

    handleButtonClick = (event) => {
        event.preventDefault();

        const id = event.target.getAttribute("data-id") || event.target.parentNode.getAttribute("data-id");
        const newState = { ...this.state };

        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i]._id === id) {
                newState.posts[i].numLikes = newState.posts[i].numLikes + 1;
                axios.put(`/api/posts/${id}`, { numLikes: newState.posts[i].numLikes })
                    .then(res => this.loadPosts())
                    .catch(err => console.log(err));
            }
        }
    };

    handleCategoryClick = (event) => {
        event.preventDefault();
        const filteredArray = [];
        filteredArray.length = 0;
        var category = event.target.getAttribute("data-category") || event.target.parentNode.getAttribute("data-category");

        if (category === "popular") {
            const newState = [...this.state.posts];
            filteredArray.push(_.orderBy(newState, ['numLikes'], ['desc']));
            this.setState({ filteredposts: filteredArray[0] });
        } else {
            for (let i = 0; i < this.state.posts.length; i++) {
                if (category === this.state.posts[i].category) {
                    filteredArray.push(this.state.posts[i]);
                }
                this.setState({ filteredposts: filteredArray });
            }
        }
    };


    render() {
        return (
            <>

                <Header
                    value={this.state.posts}
                    handleCategoryClick={this.handleCategoryClick}
                />

                <div className="container">
                    <div className="list-reset ">
                        <ul>
                            {this.state.filteredposts.length ? (
                                <>
                                    {this.state.filteredposts.map(post => (

                                        <li key={post._id} >
                                            <h1><Link to={`/post/${post._id}`} className="post-link">{post.title}</Link></h1>
                                            <h3 className="">written by:  {post.author}</h3>
                                            <p className="">{post.body}</p>

                                            <p className="">Category: {post.category}</p>
                                            <p className="likes">Number of likes: {this.showNumLikesIcon(post.numLikes)}</p>

                                            <Button
                                                color="info"
                                                type="button"
                                                className="like-button"
                                                data-action="like"
                                                data-id={post._id}
                                                onClick={this.handleButtonClick}>
                                                Like
                                            </Button>
                                        </li>
                                    ))}
                                </>
                            )
                                :

                                (
                                    <>
                                        {this.state.posts.map(post => (

                                            <li key={post._id} >
                                                <h1><Link to={`/post/${post._id}`} className="">{post.title}</Link></h1>
                                                <h3 className="">written by:  {post.author}</h3>
                                                <p className="">{post.body}</p>

                                                <p className="">Category: {post.category}</p>
                                                <p className="">Number of likes: {this.showNumLikesIcon(post.numLikes)}</p>

                                                <button
                                                    type="button"
                                                    className=""
                                                    data-action="like"
                                                    data-id={post._id}
                                                    onClick={this.handleButtonClick}>
                                                    Like
                                                </button>
                                            </li>

                                        ))

                                        }
                                    </>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </>
        )
    }



    //    end of the class
}

export default Index;
