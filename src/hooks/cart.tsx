import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import { Alert } from 'react-native';

import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-community/async-storage';

interface CartState {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number | 1;
}

interface CartContext {
  products: CartState[];
  addToCart(credentials: CartState): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const storagedProducts = useAsyncStorage('@GoMarketplace:products');

  const [data, setData] = useState<CartState[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const products = await storagedProducts.getItem();

      if (products) {
        setData([...JSON.parse(products)]);
      }
    }

    loadProducts();
  }, [storagedProducts]);

  const addToCart = useCallback(
    async product => {
      await storagedProducts.setItem(JSON.stringify(product));

      console.log(...data);

      setData([...data, { ...product, quantity: 1 }]);
    },
    [data],
  );

  const increment = useCallback(
    id => {
      setData(
        data.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      );
    },
    [data],
  );

  const decrement = useCallback(
    async id => {
      setData(
        data.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      );
    },
    [data],
  );

  const products = data;

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
