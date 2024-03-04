import { CartItemInterface } from 'interfaces/cart-item.interface';
import { ProductInterface } from 'interfaces/product.interface';

export interface CartStore {
  isCartOpened: boolean;
  cartCount: number;
  cartTotal: number;
  cartItems: CartItemInterface[];
  setIsCartOpened: (value: boolean) => void;
  addItemToCart: (product: ProductInterface) => void;
  removeItemFromCart: (item: CartItemInterface) => void;
  clearItemFromCart: (item: CartItemInterface) => void;
}
