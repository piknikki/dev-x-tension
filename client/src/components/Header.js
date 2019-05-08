import React from "react";
import { withRouter } from "react-router-dom";
import "../css/styles.css";


function Header(props) {

        return (
            <header className="bg-white float-none justify-center py-2">
                <div className="flex">
                    <div className="w-1/5 transparent"> </div>
                    <div className="w-3/5 px-2">
                        <ul className="py-6 md:flex justify-center justify-between list-reset text-2xl ">

                            <li className="md:ml-4 mx-2">
                                <button
                                    data-category="learn"
                                    className="no-underline text-green-light hover:text-blue-light"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Learn</h3>
                                </button>
                            </li>

                            <li className="md:ml-4 mx-2">
                                <button
                                    className="no-underline text-green-light hover:text-blue-light"
                                    data-category="teach"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Teach</h3>
                                </button>
                            </li>

                            <li className="md:ml-4 mx-2">
                                <button
                                    className="no-underline text-green-light hover:text-blue-light"
                                    data-category="rant"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Rant</h3>
                                </button>
                            </li>

                            <li className="md:ml-4 mx-2">
                                <button
                                    className="no-underline text-green-light hover:text-blue-light"
                                    data-category="success"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Success</h3>
                                </button>
                            </li>

                            <li className="md:ml-4 mx-2">
                                <button
                                    className="no-underline text-green-light hover:text-blue-light"
                                    data-category="tipstricks"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Tips/Tricks</h3>
                                </button>
                            </li>

                            <li className="md:ml-4 mx-2">
                                <button
                                    className="no-underline text-green-light hover:text-blue-light"
                                    data-category="dadjokes"
                                    onClick={props.handleCategoryClick}
                                >
                                    <h3>Dad Jokes</h3>
                                </button>
                            </li>


                        </ul>
                    </div>
                    <div className="w-1/5 transparent"> </div>
                </div>
            </header>
    );
}

export default withRouter(Header);



// onClick={this.setState({isFiltered: true})}
//
// {this.state.categories.map(category =>
//     <li
//         id={this.state.category}
//         key={this.state.category}
//         className="md:ml-4 list-reset"
//     >
//         <Link
//             className="no-underline text-green-light hover:text-blue-light"
//
//             to={`/posts/${this.state.category}`}
//         >
//
//             <h3>{this.state.category}</h3>
//         </Link>
//     </li>
// )}

// constructor(props) {
//     super(props)
//     this.state = {
//         categories: [],
//     }
// }
//
// componentDidMount() {
//     this.getCategories();
// }
//
// getCategories = (props) => {
//     API.getPosts(this.props.match.params.category)
//         .then(res =>
//             this.setState({ posts: res.data, title: "", author: "", body: "", category: "", numLikes: "" })
//         )
//         .catch(err => console.log(err));
// };

//

// handleButtonClick = (event) => {
//     event.preventDefault();
//
//     const category = event.target.getAttribute("data-category") || event.target.parentNode.getAttribute("data-category");
//     // const newState = { ...this.state };
//
//     // console.log(event.target);
//     console.log(category);
//
//
//
// };


