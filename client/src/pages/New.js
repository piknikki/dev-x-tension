import React, {  Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";
import API from "../utils/API";
import {
    Button,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

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
            <div className="new-container">
                <h1 className="create-new">Create a new post</h1>
                <FormGroup
                    onSubmit={this.onSubmit}
                    id="new"
                >

                        <Input
                            type="select"
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
                        </Input>


                    <div className="title">
                        <Label
                            htmlFor="title"
                            className=""
                        >
                            Title
                        </Label>
                        <Input
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="author">
                        <Label
                            htmlFor="author"
                            className=""
                        >
                            Author
                        </Label>
                        <Input
                            type="text"
                            name="author"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="body">
                        <Label
                            htmlFor="body"
                            className=""
                        >
                            Body
                        </Label>
                        <Input
                            type="textarea"
                            name="body"
                            onChange={this.onChange}
                            className=""
                        />
                    </div>

                    <div className="btn-submit">
                        <Button
                            color="info"
                            type="submit"
                            value="Save"
                            onSubmit={this.onSubmit}
                            className="save-button"
                        >Submit</Button>

                    </div>
                </FormGroup>
            </div>
        );
    }
}

export default withRouter(New);

