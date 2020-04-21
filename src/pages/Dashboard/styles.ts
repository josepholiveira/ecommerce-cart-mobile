import styled from 'styled-components/native';
import { FlatList, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  padding: 20px 0px;
`;

export const LogoContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const LogoText = styled.Text`
  font-size: 24px;
  margin-left: 5px;
  color: #354be4;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 15px;
  flex: 1;
  flex-direction: row;
`;

export const ProductList = styled(FlatList).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 25px 25px;
  border-radius: 5px;
  margin: 5px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`;

export const ProductButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #354be4;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 5px;
`;

export const ProductButtonText = styled.Text``;
