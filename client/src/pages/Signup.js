import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    // onChange(event) {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // }

    handleInputChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    // arrow function
    onSubmit = (event) => {
        event.preventDefault();

        // const data = {
        //     email: this.state.email
        // }

        console.log(this.state.email);

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




//
// app.post("/signup", function(req, res) {
//     const email = req.body.email;
//
//     // js object will need to be stringified
//     const data = {
//         members: [
//             {
//                 email_address: email,
//                 status: "subscribed"
//             }
//         ]
//     }
//
//     const jsonData = JSON.stringify(data);
//
//     const options = {
//         url: "https://us20.api.mailchimp.com/3.0/lists/a8cee5253f",
//         method: "POST",
//         headers: {
//             "Authorization": 'devxtension 4a8eff1fc62203038173f4076f641d23-us20'
//         },
//         body: jsonData
//
//     }
//
//
//     // call the function
//     request(options, function(error, response, body) {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(response.statusCode)
//         }
//     })
//
// })
//
//



// key: 4a8eff1fc62203038173f4076f641d23-us20
// id: a8cee5253f





