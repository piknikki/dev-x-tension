import React, {  Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";
import API from "../utils/API";


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

            console.log(data);


            API.savePost(data)
                .then(
                    post => {
                    // alert("Post successfully created.");
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
            <div className="">
                <h1 className="">Create a new post</h1>
                <form
                    onSubmit={this.onSubmit}
                    id="new"
                >

                    <div className="custom-select">
                        <select
                            id="categoryChoice"
                            name="categoryChoice"
                            onChange={this.handleInputChange}
                            value={this.state.category}
                        >
                            <option value="0">Select category:</option>
                            <option value="teach">Teach</option>
                            <option value="question">Question</option>
                            <option value="rant">Rant</option>
                            <option value="success">Success</option>
                            <option value="tipstricks">Tips/Tricks</option>
                            <option value="dadjokes">Dad Jokes</option>
                        </select>
                    </div>


                    <div className="">
                        <label
                            htmlFor="title"
                            className=""
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="">
                        <label
                            htmlFor="author"
                            className=""
                        >
                            Author
                        </label>
                        <input
                            type="text"
                            name="author"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="">
                        <label
                            htmlFor="body"
                            className=""
                        >
                            Body
                        </label>
                        <textarea
                            name="body"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="">
                        <input
                            type="submit"
                            value="Save"
                            onSubmit={this.onSubmit}
                            className=""
                        />

                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(New);

