import { Component } from "react";
import LibraryRestService from "../services/library-rest-service";

export default class FindAuthor extends Component {
    
    constructor(props) {
        super(props);
        this.service = new LibraryRestService();
        this.state = {
            author: '',
            books: []
        };
    }

    handleInput = (event) => {
        const value = event.target.value;
        this.setState({ author: value });
    }

    onSearch = () => {
        this.service.findByAuthor(this.state.author).then(data => {
            this.setState({ books: data });
        });
    }

    render() {
        return (
            <div>
                <br />
                <h2>Find Books by Author</h2>
                <hr />
                <input name='author' onChange={this.handleInput} className="form-control" placeholder="Enter author name" />
                <button className="btn btn-primary mt-2" onClick={this.onSearch}>Search by Author</button><br />
                <br />
                {this.state.books.length > 0 ? (
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>ISBN</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.books.map((book, index) => (
                                <tr key={index}>
                                    <td>{book.isbn}</td>
                                    <td>{book.title}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="mt-3">No books found for this author.</div>
                )}
            </div>
        );
    }
}
