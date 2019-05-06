import React, {  Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "../css/styles.css";


class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            author: "",
            body: "",
            numLikes: "",
            category: ""
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

    handleInputChange = event => {
        this.setState({
            category: event.target.value
        })
    }

    //
    onSubmit(event) {
        event.preventDefault();
        if (this.state.title && this.state.author && this.state.category) {
            const data = {
                title: this.state.title,
                author: this.state.author,
                body: this.state.body,
                numLikes: this.state.numLikes,
                category: this.state.category
            }


            axios.post(`/api/posts/`, data)
                .then(
                    post => {
                    alert("Post successfully created.");
                    document.getElementById("new").reset(); // reset the form
                    this.props.history.push("/"); // push to history to keep track of posts
                }
                )

        } else {
            alert("category, author, and title are all required")
        }

    }





    render() {
        return (
            <div className="m-8 px-16 py-6">
                <h1 className="text-blue-light">Create a new post</h1>
                <form
                    onSubmit={this.onSubmit}
                    id="new"
                >

                    <div className="custom-select py-2">
                        <select
                            id="categoryChoice"
                            name="categoryChoice"
                            onChange={this.handleInputChange}
                            value={this.state.category}>
                            <option value="0">Select category:</option>
                            <option value="Teach">Teach</option>
                            <option value="Question">Question</option>
                            <option value="Rant">Rant</option>
                            <option value="Success">Success</option>
                            <option value="TipsTricks">Tips/Tricks</option>
                            <option value="DadJokes">Dad Jokes</option>
                        </select>
                    </div>


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
                            onSubmit={this.onSubmit}
                            className="bg-blue-light h-12 text-lg hover:bg-blue-dark text-white font-bold py4 px-6 border-b-4 border-blue-dark hover:border-blue rounded"
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(New);

