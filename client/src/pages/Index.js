import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import axios from "axios";
import "../css/styles.css"
import Header from "../components/Header";

class Index extends Component {
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

        const id = event.target.getAttribute("data-id");
        const newState = { ...this.state };

        for (let i = 0; i < this.state.posts.length; i++) {
            if (this.state.posts[i]._id === id) {
                // console.log(`Clicked ${id} on ${this.state.posts[i].title}.`);
                newState.posts[i].numLikes = newState.posts[i].numLikes + 1;
                // console.log(newState.posts[i]);
        axios.put(`/api/posts/${id}`, {numLikes: newState.posts[i].numLikes})
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
            }}
        };

    handleCategoryClick = (event) => {
        var category = event.target.getAttribute("data-category") || event.target.parentNode.getAttribute("data-category");

        const filteredArray = [];

        for (let i = 0; i < this.state.posts.length; i++) {
            if (category === this.state.posts[i].category) {
                filteredArray.push(this.state.posts[i])
            }

        }

        this.setState({posts: filteredArray});
        // this.loadPosts();
        console.log(filteredArray);
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
                    <ul className="px-16 py-6 text-green-light list-reset ">
                        {this.state.posts.map(post => (

                            <li key={post.title} className="px-4 py-4">
                                <h1><Link to={`/post/${post._id}`} className="yourElement animated rubberBand no-underline text-blue-light hover:text-green-light ">{post.title}</Link></h1>
                                <h3 className="py-2 leading-relaxed">written by:  {post.author}</h3>
                                <p className="text-black py-2 leading-loose">{post.body}</p>

                                <p className="text-grey-dark py-2">Category: {post.category}</p>

                                    <p>Number of likes: {this.showNumLikesIcon(post.numLikes)}</p>

                                <button
                                    type="button"
                                    className="bg-transparent text-blue-light"
                                    data-action="like"
                                    data-id={post._id}
                                    onClick={this.handleButtonClick}>
                                    Like
                                </button>



                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
        )
    }



//    end of the class
}

export default Index;
