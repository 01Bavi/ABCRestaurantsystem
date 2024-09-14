package com.restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restaurant.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
