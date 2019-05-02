import React, {  Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";


class New extends Component {
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

    // when clicked, set the state with the new information from the event
    onChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    //
    onSubmit(event) {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            const data = {
                title: this.state.title,
                author: this.state.author,
                body: this.state.body
            };

            axios.put(`http://localhost:3000/api/posts/${this.props.match.params.id}`, data)
                .then(
                    post => {
                    alert("Post successfully created.");
                    document.getElementById("new").reset(); // reset the form
                    this.props.history.push("/"); // push to history to keep track of posts
                }
                )

        }

    }



    render() {
        return (
            <div className="m-8">
                <h1>Create a new post</h1>
                <form
                    onSubmit={this.onSubmit}
                    id="new"
                >
                    <div className="m-8">
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
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="m-8">
                        <label
                            htmlFor="author"
                            className="block text-grey-darker text-sm font-bold mb-2"
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            onChange={this.onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="m-8">
                        <label
                            htmlFor="body"
                            className="block text-grey-darker text-sm font-bold mb-2"
                        >
                            Body
                        </label>
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex justify-center">
                        <input
                            type="submit"
                            value="Save"
                            className="bg-blue hover:bg-blue-dark text-white font-bold py2 px-4 rounded"
                        />
                        <Link
                            className="big-red hover:bg-re-dark text-white font-bold py-2 px-4 rounded"
                            to="/"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(New);

