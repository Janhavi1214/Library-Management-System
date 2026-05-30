package com.day9.Library.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.day9.Library.entity.Book;

@Service
public interface BookService {

    Book save(Book b);

    Book findByIsbn(int isbn);

    Book findByTitle(String title);

    List<Book> findByAuthor(String author);

    List<Book> findByGenre(String genre);

    List<Book> findByPriceRange(double priceMin, double priceMax);

    List<Book> findAll();

    void deleteBook(int isbn);

    boolean deleteByIsbn(int isbn);
}