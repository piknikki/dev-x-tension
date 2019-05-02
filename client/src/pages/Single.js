import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import API from "../utils/API";

// this component is to get ONE post by the id
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        };
        this.onDelete = this.onDelete.bind(this); // ******************
    }

    // when loaded, get one item by id
    componentDidMount() {
            this.getPost();
    }

    getPost = () => {
        API.getPost(this.props.match.params.id)
            .then(res =>
                this.setState({ post: res.data })
            )
            .catch(err => console.log(err));
    };

    // delete one item by id and update the history?
    onDelete(event) {
        event.preventDefault();
        axios.get(`http://localhost:3000/api/posts/${this.props.match.params.id}`)
            .then(post => {
                alert("Post successfully deleted.");
                this.props.history.push("/");  // ***********************
            })
    }

    // deletePost

    render() {
        return (
            <div className="container m-8">
                <div className="flex justify-end">
                    <small>
                        <Link
                            to={`/edit/${this.state.post._id}`}
                            className="bg-blue hover: bg-blue-dark text-white font-bold py-2 px-4 rounded"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={event => this.onDelete(event)}
                            className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </small>
                </div>
                <br/>
                <h1>{this.state.post.title}</h1>
                <h3>{this.state.post.author}</h3>
                <br/>
                <div dangerouslySetInnerHTML={{ __html: this.state.post.body }} />
            </div>

        )
    }

    //  end of class
}

export default withRouter(Single);













