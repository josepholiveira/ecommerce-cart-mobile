import React, { useState, useEffect } from 'react';
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

const Dashboard: React.FC = () => {
  const [totalBalance, setTotalBalance] = useState('R$ 00,00');
  const { increment, decrement, products } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  useEffect(() => {
    function getTotalBalance(): string {
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
        <SubtotalTitle>Total: </SubtotalTitle>
        <SubtotalValue>{totalBalance}</SubtotalValue>
      </SubtotalContainer>
    </Container>
  );
};

export default Dashboard;
