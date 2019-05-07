import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import API from "../utils/API";
// import axios from "axios";

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
            .then(res => console.log(res.data))
            .then(alert(`You've edited a post!`));

        this.setState({
            title: '',
            author: '',
            body: ''
        })
        }



    render() {
        return (
            <div className="m-8">
                <h1 className="text-blue-light">Update an existing post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="m-8 ">
                        <label
                            htmlFor="title"
                            className="block text-grey-darker text-sm font-bold mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            value={this.state.title}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>



                    <div className="m-8 ">
                        <label
                            htmlFor="body"
                            className="block text-grey-darker text-sm font-bold mb-2 py-4"
                        >
                            Body
                        </label>
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            value={this.state.body}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex justify-center">
                            <input
                                type="submit"
                                value="Save"
                                onSubmit={this.onSubmit}
                                className="bg-blue-light h-12 text-lg hover:bg-blue-dark text-white font-bold py4 px-6 border-b-4 border-blue-dark hover:border-blue rounded"
                            />

                    </div>
                </form>
            </div>
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