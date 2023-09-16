import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export interface ClothingItem {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

interface CartContextProps {
  cartItem: ClothingItem ;
  setCartItems: React.Dispatch<React.SetStateAction<ClothingItem>> ;
}

const CartContextProvider= ({ children } : any) => {
  const [cartItem, setCartItems] = useState<ClothingItem[]>();
  
  const contextValue: CartContextProps = {
    cartItem,
    setCartItems,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;


  