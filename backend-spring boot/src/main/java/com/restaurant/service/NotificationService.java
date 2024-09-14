package com.restaurant.service;

import java.util.List;

import com.restaurant.model.Notification;
import com.restaurant.model.Order;
import com.restaurant.model.Restaurant;
import com.restaurant.model.User;

public interface NotificationService {
	
	public Notification sendOrderStatusNotification(Order order);
	public void sendRestaurantNotification(Restaurant restaurant, String message);
	public void sendPromotionalNotification(User user, String message);
	
	public List<Notification> findUsersNotification(Long userId);

}
