import React, { useState } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
} from './styles';

import formatValue from '../../utils/formatValue';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([
    {
      title: 'Cadeira Charles Eames',
      image_url:
        'https://madeiranit.ciaimg.com.br/Assets/Produtos/SuperZoom/cadeira-eiffel-preta-3.jpg?v=4627356f-1',
      price: 1,
    },
    {
      title: 'Cadeira Rivatti',
      image_url:
        'https://http2.mlstatic.com/cadeira-rivatti-branca-pes-madeira-confortavel-bonita-D_NQ_NP_981901-MLB20422264882_092015-F.jpg',
      price: 2,
    },
  ]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.price}
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
                  {formatValue(item.price * 50)}
                </ProductPriceTotal>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton>
                  <FeatherIcon name="plus" color="#000" size={16} />
                </ActionButton>
                <ProductQuantity>50</ProductQuantity>
                <ActionButton>
                  <FeatherIcon name="minus" color="#000" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
    </Container>
  );
};

export default Dashboard;
