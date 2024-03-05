import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { CartItemInterface } from 'interfaces/cart-item.interface';
import { ProductInterface } from 'interfaces/product.interface';

import { CartStore } from './interfaces';

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      isCartOpened: false,
      cartCount: 0,
      cartTotal: 0,
      cartItems: [],
      setIsCartOpened: isCartOpened => set(state => ({ ...state, isCartOpened })),
      addItemToCart: newItem =>
        set(state => {
          const newCartItems = addCartItem(state.cartItems, newItem);

          return {
            ...state,
            ...getUpdatedState(newCartItems)
          };
        }),
      removeItemFromCart: itemToRemove =>
        set(state => {
          const newCartItems = removeCartItem(state.cartItems, itemToRemove);

          return {
            ...state,
            ...getUpdatedState(newCartItems)
          };
        }),
      clearItemFromCart: itemToClear =>
        set(state => {
          const newCartItems = clearCartItem(state.cartItems, itemToClear);

          return {
            ...state,
            ...getUpdatedState(newCartItems)
          };
        })
    }),
    {
      name: 'cart-storage',
      version: 1
    }
  )
);

const addCartItem = (cartItems: CartItemInterface[], productToAdd: ProductInterface) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems: CartItemInterface[], cartItemToRemove: CartItemInterface) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

  if (existingCartItem?.quantity === 1) {
    return clearCartItem(cartItems, cartItemToRemove);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItems: CartItemInterface[], cartItemToClear: CartItemInterface) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

const getUpdatedState = (newCartItems: CartItemInterface[]) => {
  const newCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  const newTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

  return {
    cartCount: newCount,
    cartTotal: newTotal,
    cartItems: newCartItems
  };
};
