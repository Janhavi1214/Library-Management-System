import { Component } from "react";
import LibraryRestService from "../services/library-rest-service";

export default class FindAuthor extends Component {

    genreOptions = [
        'Fiction',
        'Non-Fiction',
        'Computer',
        'History',
        'Biography'
    ];

    constructor(props) {

        super(props);

        this.service = new LibraryRestService();

        this.state = {
            genre: '',
            books: null
        };
    }

    handleInput = (event) => {

        const value = event.target.value;

        this.setState({
            genre: value
        });
    }

    onSearch = () => {

        this.service.findByGenre(this.state.genre)

            .then(data => {

                console.log("GENRE DATA =", data);

                this.setState({
                    books: data
                });
            })

            .catch(error => {

                console.log("ERROR =", error);

                this.setState({
                    books: []
                });
            });
    }

    render() {

        return (

            <div>

                <br />

                <h2>Find Books by Genre</h2>

                <hr />

                <select
                    name="genre"
                    onChange={this.handleInput}
                    className="form-control"
                    value={this.state.genre}
                >

                    <option value="">
                        Select Genre
                    </option>

                    {this.genreOptions.map((genre, index) => (

                        <option
                            key={index}
                            value={genre}
                        >
                            {genre}
                        </option>

                    ))}

                </select>

                <button
                    className="btn btn-primary mt-2"
                    onClick={this.onSearch}
                >
                    Search by Genre
                </button>

                <br />
                <br />

                {this.state.books === null ? null :

                    this.state.books.length > 0 ? (

                        <table className="table table-bordered mt-3">

                            <thead>

                                <tr>
                                    <th>ISBN</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Genre</th>
                                    <th>Price</th>
                                </tr>

                            </thead>

                            <tbody>

                                {this.state.books.map((book, index) => (

                                    <tr key={index}>

                                        <td>{book.isbn}</td>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.price}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    ) : (

                        <div className="mt-3">

                            No books found for this genre.

                        </div>

                    )

                }

            </div>
        );
    }
}