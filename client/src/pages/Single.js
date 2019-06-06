import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
// import axios from "axios";
import API from "../utils/API";
import {
    Row,
    Col,
    Button
} from 'reactstrap';

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
        API.deletePost(this.props.match.params.id)
            .then(post => {
                this.getPost();
                // alert("Post successfully deleted.");
                this.props.history.push("/");  // ***********************
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <>
                <Row>

                    <h3 className="instruct">Click on the title to edit or the red button to delete</h3>
                </Row>
                <Row>

                    <Col>
                        <NavLink
                            to={`/edit/${this.state.post._id}`}
                            id="edit-btn"
                            color="link"
                        >
                            <h1 className="text-blue-light">{this.state.post.title}</h1>

                        </NavLink>
                            <h3 className="text-green-light">written by:  {this.state.post.author}</h3>
                            <p className="">{this.state.post.body}</p>


                            <Button
                                id="delete-btn"
                                color="danger"
                                onClick={event => this.onDelete(event)}
                                className=""
                            >
                                Delete
                            </Button>
                    </Col>

                </Row>
            </>
        )
    }

    //  end of class
}

export default withRouter(Single);













