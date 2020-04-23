import React, { useState, useEffect, useMemo } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

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
  SubtotalTitle,
  SubtotalValue,
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

const Cart: React.FC = () => {
  const { increment, decrement, products } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productSubTotal = product.price * product.quantity;

      return accumulator + productSubTotal;
    }, 0);

    return total;
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
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
                <ActionButton
                  testID={`increment-${item.id}`}
                  onPress={() => handleIncrement(item.id)}
                >
                  <FeatherIcon name="plus" color="#000" size={16} />
                </ActionButton>
                <ProductQuantity>{item.quantity}</ProductQuantity>
                <ActionButton
                  testID={`decrement-${item.id}`}
                  onPress={() => handleDecrement(item.id)}
                >
                  <FeatherIcon name="minus" color="#000" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <SubtotalContainer>
        <SubtotalTitle>Total: </SubtotalTitle>
        <SubtotalValue>{cartTotal}</SubtotalValue>
      </SubtotalContainer>
    </Container>
  );
};

export default Cart;
