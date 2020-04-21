import React from 'react';

import { useNavigation } from '@react-navigation/native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  Container,
  CartTotalText,
  CartPricing,
  CartButton,
  CartButtonText,
} from './styles';

const FloatingCart: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CartPricing>
        <CartTotalText>Total: </CartTotalText>
        R$ 50,00
      </CartPricing>

      <CartButton onPress={() => navigation.navigate('Cart')}>
        <CartButtonText>Carrinho </CartButtonText>

        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
      </CartButton>
    </Container>
  );
};

export default FloatingCart;
