import { Component } from "react";
import LibraryRestService from "../services/library-rest-service";

export default class FindPrice extends Component {

    constructor(props) {
        super(props);
        this.service = new LibraryRestService();
        this.state = {
            min: 0,
            max: 0,
            books: []
        };
    }

    handleInput = (event) => {
        const value = event.target.value;
        this.setState({ [event.target.name]: value });
    }

    onSearch = () => {
        this.service.findByPrice(this.state.min, this.state.max).then(data => {
            this.setState({ books: data });
        });
    }

    render() {
        return (
            <div>
                <br />
                <h2>Find Books by Price</h2>
                <hr />
                <div className="row">
                    <div className="col">
                    <input name='min' onChange={this.handleInput} className="form-control" placeholder="Enter Min Price" />
                    </div>
                    <div className="col">
                    <input name='max' onChange={this.handleInput} className="form-control" placeholder="Enter Max Price" />
                    </div>
                </div>
                <button className="btn btn-primary mt-2" onClick={this.onSearch}>Search by Price</button><br />
                <br />
                {this.state.books && this.state.books.length > 0 ? (
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
                    <div className="mt-3">No books found for this price range.</div>
                )}
            </div>
        );
    }
}
