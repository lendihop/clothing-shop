import { createContext, FC, PropsWithChildren, useEffect, useState } from 'react';

import { CartItemInterface } from 'interfaces/cart-item.interface';
import { ProductInterface } from 'interfaces/product.interface';

export const addCartItem = (cartItems: CartItemInterface[], productToAdd: ProductInterface) => {
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
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
};

const clearCartItem = (cartItems: CartItemInterface[], cartItemToClear: CartItemInterface) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

interface CartContextInterface {
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean) => void;
  cartItems: CartItemInterface[];
  addItemToCart: (product: ProductInterface) => void;
  removeItemToCart: (item: CartItemInterface) => void;
  clearItemFromCart: (item: CartItemInterface) => void;
  cartCount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextInterface>({
  isCartOpened: false,
  setIsCartOpened: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0
});

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const removeItemToCart = (cartItemToRemove: CartItemInterface) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear: CartItemInterface) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const addItemToCart = (product: ProductInterface) => setCartItems(addCartItem(cartItems, product));

  const value = {
    isCartOpened,
    setIsCartOpened,
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
