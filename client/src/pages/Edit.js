import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../utils/API";
// import axios from "axios";

import {
    Row,
    Col,
    Input, Button
} from 'reactstrap';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            body: ""
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    // when loaded, get one item by id
    componentDidMount() {
        API.getPost(`${this.props.match.params.id}`)
            .then(post => { // singular item
                this.setState({
                    title: post.data.title,
                    author: post.data.author,
                    body: post.data.body
                });
            });
    }



    // when clicked, set the state with the new information from the event
    onChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }


    // when clicked, use id to search for this post and then update it with the incoming data
    onSubmit(event) {
        event.preventDefault();

        const obj = {
            id: this.state.id,
            title: this.state.title,
            author: this.state.author,
            body: this.state.body
        }

        API.editPost(`${this.props.match.params.id}`, obj)
            .then(res => {
                console.log(res.data);
                this.props.history.push("/");
            // .then(alert(`You've edited a post!`));

        this.setState({
            title: '',
            author: '',
            body: ''
        })
        });
    }



    render() {
        return (
            <>
            <Row>
                <h1 className="text-blue-light instruct">Update an existing post</h1>
            </Row>

            <Row>
                <Col>
                    <form onSubmit={this.onSubmit} className="">
                        <div className="">
                            <label
                                htmlFor="title"
                                className="edit-title"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                                className="edit-title-box"
                            />
                        </div>



                        <div className="">
                            <label
                                htmlFor="body"
                                className="edit-body"
                            >
                                Body
                            </label>
                            <textarea
                                name="body"
                                onChange={this.onChange}
                                value={this.state.body}
                                className="edit-body-box"
                            />
                        </div>


                                <Button
                                    color="info"
                                    type="button"
                                    value="Save"
                                    onClick={this.onSubmit}
                                    className="save-button"
                                >Save</Button>


                    </form>
                </Col>
            </Row>
                </>
        );
    }
    // end of class
}


export default withRouter(Edit);




// {/*<div className="m-8">*/}
// {/*    <label*/}
// {/*        htmlFor="author"*/}
// {/*        className="block text-grey-darker text-sm font-bold mb-2"*/}
// {/*    >*/}
// {/*        Author*/}
// {/*    </label>*/}
// {/*    <input*/}
// {/*        type="text"*/}
// {/*        name="author"*/}
// {/*        value={this.onChange}*/}
// {/*        onChange={this.state.author}*/}
// {/*        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"*/}
// {/*    />*/}
// {/*</div>*/}