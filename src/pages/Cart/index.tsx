import React, { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ProductContainer,
  ProductList,
  Product,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPrice,
  ProductPriceTotal,
  ActionContainer,
  ActionButton,
  ProductQuantity,
  SubtotalContainer,
  SubtotalText,
} from './styles';

import { useCart } from '../../hooks/cart';

import formatValue from '../../utils/formatValue';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const { increment, decrement, products } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }: { item: Product }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>
                  {formatValue(item.price)}
                  x1
                </ProductPrice>
                <ProductPriceTotal>
                  {formatValue(item.price * item.quantity)}
                </ProductPriceTotal>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => handleIncrement(item.id)}>
                  <FeatherIcon name="plus" color="#000" size={16} />
                </ActionButton>
                <ProductQuantity>{item.quantity}</ProductQuantity>
                <ActionButton onPress={() => handleDecrement(item.id)}>
                  <FeatherIcon name="minus" color="#000" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <SubtotalContainer>
        <SubtotalText>Total: R$ 5.500,00</SubtotalText>
      </SubtotalContainer>
    </Container>
  );
};

export default Dashboard;
