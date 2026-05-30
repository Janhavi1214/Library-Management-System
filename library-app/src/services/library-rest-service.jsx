import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/v1/books";

export default class LibraryRestService {

    getAllBooks() {

        return axios.get(BASE_URL + "/all")
            .then(response => response.data);
    }

    addBook(book) {

        return axios.post(BASE_URL + "/add", book)
            .then(response => response.data);
    }

    deleteBook(isbn) {

        return axios.delete(BASE_URL + "/" + isbn)
            .then(response => response.data);
    }

    findByTitle(title) {

        return axios.get(BASE_URL + "/title/" + title)
            .then(response => response.data);
    }

    findByAuthor(author) {

        return axios.get(BASE_URL + "/author/" + author)
            .then(response => response.data);
    }

    findByGenre(genre) {

        return axios.get(BASE_URL + "/genre/" + genre)
            .then(response => response.data);
    }

    findByPrice(min, max) {

    return axios.get(
        BASE_URL + "/price?min=" + min + "&max=" + max
    )
    .then(response => response.data);
}
}