import React, { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  Header,
  LogoContainer,
  LogoText,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();
  const navigation = useNavigation();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(item: Product): void {
    addToCart(item);

    navigation.navigate('Cart');
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <FeatherIcon name="shopping-bag" size={24} color="#354be4" />
          <LogoText>GoMarketplace</LogoText>
        </LogoContainer>
      </Header>
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
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{formatValue(item.price)}</ProductPrice>
              <ProductButton
                testID={`like-button-${item.id}`}
                onPress={() => handleAddToCart(item)}
              >
                <FeatherIcon size={24} name="plus" color="#fff" />
              </ProductButton>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
