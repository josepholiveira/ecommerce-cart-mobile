import React from 'react';
import 'react-native';
import '@react-navigation/native';

import { render, fireEvent, act } from '@testing-library/react-native';
import api from '../services/api';

import Cart from '../index';

const apiMock = new AxiosMock(api);

const wait = (amount = 0): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, amount));
};

const actWait = async (amount = 0): Promise<void> => {
  await act(async () => {
    await wait(amount);
  });
};

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => {
    const { TouchableHighlight } = require('react-native');

    const MockTouchable = props => {
      return <TouchableHighlight {...props} />;
    };

    MockTouchable.displayName = 'TouchableOpacity';

    return MockTouchable;
  },
);

describe('Hello', () => {
  it('should be able to list the transactions', async () => {
    const { getByText, getByTestId, getAllByTestId } = render(<Cart />);

    fireEvent.press(getByTestId(`like-button-1234`));
    fireEvent.press(getByTestId(`like-button-1234`));

    await actWait();

    expect(getByText('Carrinho')).toBeTruthy();
  });
});
