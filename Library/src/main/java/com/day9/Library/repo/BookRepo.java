package com.day9.Library.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.day9.Library.entity.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, Integer>{
	
	List<Book> findByAuthor(String author);
	
	Book findByTitle(String title);
	
	List<Book> findByGenre(String genre);
	
	@Query("FROM Book WHERE price BETWEEN :min AND :max")
	List<Book> findByPriceRange(@Param("min") double priceMin, @Param("max") double priceMax);
}
