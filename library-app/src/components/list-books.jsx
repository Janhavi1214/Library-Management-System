import React, { Component } from 'react';

import LibraryRestService from '../services/library-rest-service';
import ShowBook from './show-book';

export default class ListBooks extends Component {

    constructor(props) {
        super(props);
        this.service = new LibraryRestService();
        this.state = {
            books: null
        };
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks() {
        this.service.getAllBooks().then(data => {
            this.setState({ books: data });
        });
    }

    render() {
        if (!this.state.books || this.state.books.length === 0)
            return <div>Loading...</div>
        
        return (
            <div>
                <br />
                <h2>List of Books</h2>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ISBN</th><th>Title</th><th>Author</th><th>Genre</th><th>Price</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map((book, index) => (
                        <tr key={index}>
                            <ShowBook book={book} onDelete={this.doDelete} />
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    doDelete = (isbn) => {
        this.service.deleteBook(isbn).then(response => {
            this.getBooks();
        });
    }

}
