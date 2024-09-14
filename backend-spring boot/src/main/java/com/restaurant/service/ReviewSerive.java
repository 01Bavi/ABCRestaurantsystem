package com.restaurant.service;

import java.util.List;

import com.restaurant.Exception.ReviewException;
import com.restaurant.model.Review;
import com.restaurant.model.User;
import com.restaurant.request.ReviewRequest;

public interface ReviewSerive {
	
    public Review submitReview(ReviewRequest review,User user);
    public void deleteReview(Long reviewId) throws ReviewException;
    public double calculateAverageRating(List<Review> reviews);
}
