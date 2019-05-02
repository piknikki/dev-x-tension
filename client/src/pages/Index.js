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
                this.setState({ posts: res.data, title: "", author: "", body: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="m-8">
                <h2>This is the index page</h2>
                <ul className="index">
                    {this.state.posts.map(post => (
                        <li key={post.title}>
                            <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
                            <h3>{post.author}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }



//    end of the class
}

export default Index;
