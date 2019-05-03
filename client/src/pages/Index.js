import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import axios from "axios";

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
                this.setState({ posts: res.data, title: "", author: "", body: "", category: "", numLikes: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <div className="list-reset ">
                    <ul className="px-16 py-10 text-green-light  list-reset">
                        {this.state.posts.map(post => (

                            <li key={post.title} className="px-4 py-4">
                                <h2><Link to={`/post/${post._id}`} className="no-underline text-blue-light hover:text-green-light">{post.title}</Link></h2>
                                <h3 className="py2">Written by:  {post.author}</h3>
                                <p className="text-black py-2">{post.body}</p>

                                <p className="text-grey-dark">Category: {post.category}</p>
                                <p>Number of likes: {post.numLikes}</p>

                                    <button
                                        type="button"
                                        className="btn"
                                        data-action="like"
                                        data-id={post._id}
                                        onClick={this.handleButtonClick}>
                                        <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
                                        <i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>
                                        <i className="fas fa-bacon text-blue-light text-xl px-2"></i>
                                        <i className="fas fa-ice-cream text-green-light text-xl px-2"></i>
                                    </button>



                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        )
    }



//    end of the class
}

export default Index;
