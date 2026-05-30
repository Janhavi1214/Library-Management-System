package com.day9.Library.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.day9.Library.entity.Book;
import com.day9.Library.repo.BookRepo;

@Service
public class BookServiceIMPL implements BookService {

    @Autowired
    private BookRepo repo;

    @Override
    public Book save(Book b) {
        return repo.save(b);
    }

    @Override
    public Book findByIsbn(int isbn) {
        return repo.findById(isbn).orElse(null);
    }

    @Override
    public Book findByTitle(String title) {
        return repo.findByTitle(title);
    }

    @Override
    public List<Book> findByAuthor(String author) {
        return repo.findByAuthor(author);
    }

    @Override
    public List<Book> findByGenre(String genre) {
        return repo.findByGenre(genre);
    }

    @Override
    public List<Book> findByPriceRange(double priceMin, double priceMax) {
        return repo.findByPriceRange(priceMin, priceMax);
    }

    @Override
    public List<Book> findAll() {
        return repo.findAll();
    }

    @Override
    public void deleteBook(int isbn) {
        repo.deleteById(isbn);
    }

    @Override
    public boolean deleteByIsbn(int isbn) {
        repo.deleteById(isbn);
		return false;
    }
}