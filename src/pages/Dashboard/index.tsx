import React, { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View } from 'react-native';

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
  ProductButtonText,
} from './styles';

import FloatingCart from '../../components/FloatingCart';

import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}

const Dashboard: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product[]>([
    {
      id: '123',
      title: 'Cadeira Charles Eames',
      image_url:
        'https://madeiranit.ciaimg.com.br/Assets/Produtos/SuperZoom/cadeira-eiffel-preta-3.jpg?v=4627356f-1',
      price: 500,
    },
    {
      id: '1234',
      title: 'Cadeira Rivatti',
      image_url:
        'https://http2.mlstatic.com/cadeira-rivatti-branca-pes-madeira-confortavel-bonita-D_NQ_NP_981901-MLB20422264882_092015-F.jpg',
      price: 600,
    },
    {
      id: '12345',
      title: 'Poltrona Bona Rosa',
      image_url:
        'https://staticmobly.akamaized.net/p/Mobly-Poltrona-Bona-Rosa-3170-822255-1-zoom.jpg',
      price: 700,
    },
    {
      id: '123456',
      title: 'Poltrona de madeira',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRod5Tf0R0LkCjClrgAJU0tM713nyqHTP2lFbXU1o5zheYpwgfonTTde8swBNlahgij4hGeOgn7hQ&usqp=CAc',
      price: 800,
    },
    {
      id: '45678',
      title: 'Cadeira Charles Eames',
      image_url:
        'https://madeiranit.ciaimg.com.br/Assets/Produtos/SuperZoom/cadeira-eiffel-preta-3.jpg?v=4627356f-1',
      price: 900,
    },
    {
      id: '56789',
      title: 'Cadeira Rivatti',
      image_url:
        'https://http2.mlstatic.com/cadeira-rivatti-branca-pes-madeira-confortavel-bonita-D_NQ_NP_981901-MLB20422264882_092015-F.jpg',
      price: 100,
    },
  ]);

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
              <ProductButton onPress={() => addToCart(item)}>
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
