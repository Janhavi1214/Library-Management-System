package com.day9.Library.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Book {
	
	@Id @Column(name = "isbn")
	private int isbn;
	
	@Column(name = "title", length = 30)
	private String title;
	
	@Column(name = "author", length = 20)
	private String author;
	
	@Column(name = "genre", length = 20)
	private String genre;
	
	@Column(name = "price")
	private double price;

	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	public Book() {
	}

	public Book(int isbn, String title,
	            String author, String genre,
	            double price) {

	    this.isbn = isbn;
	    this.title = title;
	    this.author = author;
	    this.genre = genre;
	    this.price = price;
	}
}
