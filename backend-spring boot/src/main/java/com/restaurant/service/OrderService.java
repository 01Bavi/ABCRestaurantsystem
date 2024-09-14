package com.restaurant.service;

import java.util.List;

import com.stripe.exception.StripeException;
import com.restaurant.Exception.CartException;
import com.restaurant.Exception.OrderException;
import com.restaurant.Exception.RestaurantException;
import com.restaurant.Exception.UserException;
import com.restaurant.model.Order;
import com.restaurant.model.PaymentResponse;
import com.restaurant.model.User;
import com.restaurant.request.CreateOrderRequest;

public interface OrderService {
	
	 public PaymentResponse createOrder(CreateOrderRequest order, User user) throws UserException, RestaurantException, CartException, StripeException;
	 
	 public Order updateOrder(Long orderId, String orderStatus) throws OrderException;
	 
	 public void cancelOrder(Long orderId) throws OrderException;
	 
	 public List<Order> getUserOrders(Long userId) throws OrderException;
	 
	 public List<Order> getOrdersOfRestaurant(Long restaurantId,String orderStatus) throws OrderException, RestaurantException;
	 

}
