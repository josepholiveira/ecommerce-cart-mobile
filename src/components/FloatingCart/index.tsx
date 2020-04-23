import React, { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartTotalText,
  CartPricing,
  CartButton,
  CartButtonText,
} from './styles';

import formatValue from '../../utils/formatValue';

import { useCart } from '../../hooks/cart';

const FloatingCart: React.FC = () => {
  const [totalBalance, setTotalBalance] = useState('R$ 00,00');
  const { products } = useCart();

  const navigation = useNavigation();

  useEffect(() => {
    function getTotalBalance(): void {
      const balance = products.reduce((accumulator, product) => {
        accumulator += product.price * product.quantity;
        return accumulator;
      }, 0);

      setTotalBalance(formatValue(balance));
    }

    getTotalBalance();
  }, [products]);

  return (
    <Container>
      <CartPricing testID="123">
        <CartTotalText>Total: </CartTotalText>
        {totalBalance}
      </CartPricing>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <CartButtonText>Carrinho </CartButtonText>

        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
