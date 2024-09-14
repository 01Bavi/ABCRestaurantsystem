package com.restaurant.service;

import com.restaurant.Exception.CartException;
import com.restaurant.Exception.CartItemException;
import com.restaurant.Exception.FoodException;
import com.restaurant.Exception.UserException;
import com.restaurant.model.Cart;
import com.restaurant.model.CartItem;
import com.restaurant.request.AddCartItemRequest;

public interface CartSerive {

	public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws UserException, FoodException, CartException, CartItemException;

	public CartItem updateCartItemQuantity(Long cartItemId,int quantity) throws CartItemException;

	public Cart removeItemFromCart(Long cartItemId, String jwt) throws UserException, CartException, CartItemException;

	public Long calculateCartTotals(Cart cart) throws UserException;
	
	public Cart findCartById(Long id) throws CartException;
	
	public Cart findCartByUserId(Long userId) throws CartException, UserException;
	
	public Cart clearCart(Long userId) throws CartException, UserException;
	

	

}
