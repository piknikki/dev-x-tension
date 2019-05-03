import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import axios from "axios";

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    // get the posts and change the state to reflect the data
    componentDidMount() {
        this.loadCategoryPosts();
    }

    loadCategoryPosts = () => {
        API.getPosts(this.state.posts.category)
            .then(res =>
                this.setState({ posts: res.data, title: "", author: "", body: "" })
            )
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
                <h1>{this.state.posts.category}</h1>
                <div className="list-reset ">
                    <ul className="px-16 py-10 text-green-light hover:text-blue-light list-reset">
                        {this.state.posts.map(post => (
                            <li key={post.title} className="px-4 py-4">
                                <h2><Link to={`/post/${post._id}`} className="no-underline">{post.title}</Link></h2>
                                <h3 className="py2">{post.author}</h3>
                                <p className="text-black py-2">{post.body}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        )
    }



//    end of the class
}

export default Detail;
