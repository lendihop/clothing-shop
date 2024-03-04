import { CartStore } from './interfaces';

export const isCartOpenedSelector = (state: CartStore) => state.isCartOpened;

export const cartItemsSelector = (state: CartStore) => state.cartItems;

export const cartCountSelector = (state: CartStore) => state.cartCount;

export const cartTotalSelector = (state: CartStore) => state.cartTotal;

export const setIsCartOpenedSelector = (state: CartStore) => state.setIsCartOpened;

export const addItemToCartSelector = (state: CartStore) => state.addItemToCart;

export const removeItemFromCartSelector = (state: CartStore) => state.removeItemFromCart;

export const clearItemFromCartSelector = (state: CartStore) => state.clearItemFromCart;
