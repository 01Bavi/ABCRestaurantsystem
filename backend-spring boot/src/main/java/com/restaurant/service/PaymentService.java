package com.restaurant.service;

import com.stripe.exception.StripeException;
import com.restaurant.model.Order;
import com.restaurant.model.PaymentResponse;

public interface PaymentService {
	
	public PaymentResponse generatePaymentLink(Order order) throws StripeException;

}
