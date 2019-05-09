import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            sent: false
        }
    }

    handleInputChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            email: 'empty'
        })
    }

    // arrow function
    onSubmit = (event) => {
        event.preventDefault();

        console.log("this is the state email:  " + this.state.email);

        axios.post("/signup", { email: this.state.email })
            .then(res => {
                this.setState({ sent: true, email: this.state.email  }, this.resetForm());
            })
            .catch(error => {
                console.log(error)
            })

    }




    render() {
        return (
            <>

                <div className="container mx-auto px-4">

                    <div>
                        <form
                            className="w-full mx-auto max-w-sm py-20"
                        >
                            <h1 className="text-blue-light py-10">Sign up for awesomeness in your email</h1>
                            <div className="flex items-center border-b border-b-3 border-blue-light py-2">
                                <input
                                    className="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                                    type="email"
                                    placeholder="Email"
                                    aria-label="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                                <button
                                    className="flex-no-shrink hover:bg-green-light bg-blue-light text-sm text-white py-2 px-4 rounded"
                                    type="submit"
                                    onClick={this.onSubmit}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Signup);






