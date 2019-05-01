import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    // get the posts and change the state to reflect the data
    componentDidMount() {
        axios.get("http://localhost:3000/api/posts")
            .then(posts => {
                this.setState({
                    posts: posts.data,
                })
            })
    }

    render() {
        return (
            <div className="m-8">
                <h2>This is the index page</h2>
                <ul className="index">
                    {this.state.posts.map(post => (
                        <li key={post.title}>
                            <h2><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }



//    end of the class
}

export default Index;
