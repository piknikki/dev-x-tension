import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
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

        if (postLikes >= 0 && postLikes < 7) {
            return <i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>
        } else if (postLikes >= 7 && postLikes < 15) {

            return <i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>
        } else if (postLikes >= 15 && postLikes < 25) {

            return <i className="fas fa-bacon text-blue-light text-xl px-2"></i>
        } else if (postLikes >= 25 && postLikes < 50) {

            return <i className="fas fa-ice-cream text-green-light text-xl px-2"></i>
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

    render() {
        return (
            <div className="container">
                <div className="list-reset ">
                    <ul className="px-16 py-6 text-green-light list-reset ">
                        {this.state.posts.map(post => (

                            <li key={post.title} className="px-4 py-4">
                                <h1><Link to={`/post/${post._id}`} className="no-underline text-blue-light hover:text-green-light ">{post.title}</Link></h1>
                                <h3 className="py-2 leading-relaxed">written by:  {post.author}</h3>
                                <p className="text-black py-2 leading-loose">{post.body}</p>

                                <p className="text-grey-dark py-2">Category: {post.category}</p>
                                <p>Number of likes: {this.showNumLikesIcon(post.numLikes)}</p>
                                <p>
                                <button
                                    type="button"
                                    className="btn"
                                    data-action="like"
                                    data-id={post._id}
                                    onClick={this.handleButtonClick}>
                                    Like
                                    {/*<i className="fas fa-pizza-slice text-blue-light text-xl px-2"></i>*/}
                                    {/*<i className="fas fa-stroopwafel text-green-light text-xl px-2"></i>*/}
                                    {/*<i className="fas fa-bacon text-blue-light text-xl px-2"></i>*/}
                                    {/*<i className="fas fa-ice-cream text-green-light text-xl px-2"></i>*/}
                                </button>
                                </p>


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
