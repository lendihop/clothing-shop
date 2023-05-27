import {createContext, FC, PropsWithChildren, useState} from 'react';

interface CartContextType {
  isCartOpened: boolean;
  setIsCartOpened: (value: boolean) => void;
}

export const CartContext = createContext<CartContextType>({
  isCartOpened: false,
  setIsCartOpened: () => {},
});

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const value = { isCartOpened, setIsCartOpened };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
