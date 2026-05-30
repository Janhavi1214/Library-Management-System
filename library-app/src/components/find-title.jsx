import { Component } from 'react';
import LibraryRestService from '../services/library-rest-service';
import ShowBook from './show-book';

export default class FindTitle extends Component {

    constructor(props) {
        super(props);
        this.service = new LibraryRestService();
        this.state = {
            title: '',
            book: null
        }
    }   

    handleInput = (event) => {
        const value = event.target.value;
        this.setState({ title: value });
    }

    onSearch = () => {
        this.service.findByTitle(this.state.title).then(data => {
            this.setState({ book: data });
        });
    }

    render() {
        return (
            <div>
                <br />
                <h2>Find Book by Title</h2>
                <hr />
                <input name='title' onChange={this.handleInput} className="form-control" placeholder="Enter book title" />
                <button className="btn btn-primary mt-2" onClick={this.onSearch}>Search by Title</button><br />
                <br />
                {this.state.book ? (
                    <table className="table table-bordered mt-3">
                    <tbody>
                        <tr><td>ISBN</td><td>{this.state.book.isbn}</td></tr>
                        <tr><td>Title</td><td>{this.state.book.title}</td></tr>
                        <tr><td>Author</td><td>{this.state.book.author}</td></tr>
                        <tr><td>Genre</td><td>{this.state.book.genre}</td></tr>
                        <tr><td>Price</td><td>{this.state.book.price}</td></tr>
                    </tbody>
                    </table>
                ) : (
                    <div className="mt-3">No books found.</div>
                )}
            </div>
        );
    }
}