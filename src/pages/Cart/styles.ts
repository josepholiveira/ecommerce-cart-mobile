import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList)`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 70px;
  width: 70px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;

  font-size: 12px;
  color: #a3a3a3;
`;

export const ProductPriceTotal = styled.Text`
  font-weight: bold;
  margin-top: 5px;

  font-size: 18px;
  color: #354be4;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;

  margin-left: auto;

  background: #ebeef8;
  padding: 5px;
  border-radius: 5px;
`;

export const ActionButton = styled.TouchableOpacity``;

export const ProductQuantity = styled.Text`
  font-size: 16px;
  margin: 5px 0;
`;

export const SubtotalContainer = styled.View`
  position: absolute;
  bottom: 40px;

  elevation: 1;
  box-shadow: 0px 0px 3.5px rgba(0, 0, 0, 0.2);

  margin: 0 20px;
  flex-direction: row;
  background: #fff;
  border-radius: 5px;
  padding: 20px 40px;
`;

export const SubtotalTitle = styled.Text`
  font-size: 16px;
  color: #777;
  flex: 1;
`;

export const SubtotalValue = styled.Text`
  font-size: 16px;
  flex: 1;
  color: #354be4;
  font-weight: bold;
`;
