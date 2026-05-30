import React, { Component } from 'react';
import LibraryRestService from '../services/library-rest-service';

export default class AddBook extends Component {

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
            isbn: '',
            title: '',
            author: '',
            genre: '',
            price: ''
        };
    }

    handleInput = (event) => {

        const name = event.target.name;

        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    onSave = () => {

        console.log("SENDING =", this.state);

        this.service.addBook(this.state)

            .then(response => {

                console.log("RESPONSE =", response);

                alert("Book Added Successfully");

            })

            .catch(error => {

                console.log("ERROR =", error);

                alert("Error while saving book");
            });
    }

    render() {

        return (

            <>
                <br />

                <h2>Add New Book</h2>

                <hr />

                <form
                    className='was-validated'

                    onSubmit={(e) => {

                        e.preventDefault();

                        this.onSave();
                    }}
                >

                    <input
                        name="isbn"
                        onChange={this.handleInput}
                        placeholder="Enter Book ISBN"
                        className="form-control"
                        required
                        type="number"
                    />

                    <br />

                    <input
                        name="title"
                        onChange={this.handleInput}
                        placeholder="Enter Book Title"
                        className="form-control"
                        required
                    />

                    <br />

                    <input
                        name="author"
                        onChange={this.handleInput}
                        placeholder="Enter Author Name"
                        className="form-control"
                        required
                    />

                    <br />

                    <select
                        name="genre"
                        value={this.state.genre}
                        onChange={this.handleInput}
                        className="form-control"
                        required
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

                    <br />

                    <input
                        name="price"
                        onChange={this.handleInput}
                        placeholder="Enter Book Price"
                        className="form-control"
                        required
                        type="number"
                    />

                    <br />

                    <button
                        className="btn btn-primary"
                        type='submit'
                    >
                        Save Book
                    </button>

                </form>

            </>
        );
    }
}