import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;

  bottom: 40px;
  background: #fff;
  flex-direction: row;
  align-items: center;
  margin: 0 15px;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  elevation: 1;
  box-shadow: 0px 0px 3.5px rgba(0, 0, 0, 0.2);
`;

export const CartTotalText = styled.Text`
  color: #777;
`;

export const CartPricing = styled.Text`
  padding: 20px;
  flex: 1;
`;

export const CartButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #354be4;
  padding: 15px 15px;
  border-radius: 5px;
  border-top-left-radius: 0px;
`;

export const CartButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
