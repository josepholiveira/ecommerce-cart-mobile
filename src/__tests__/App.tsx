import React from 'react';
import 'react-native';
import '@react-navigation/native';

import { render, fireEvent } from '@testing-library/react-native';

import Cart from '../index';

const wait = (amount = 0) => {
  return new Promise(resolve => setTimeout(resolve, amount));
};

const actWait = async (amount = 0) => {
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
  it('should be able to sum', () => {
    const { getByText, getAllByTestId } = render(<Cart />);

    expect(getByText('GoMarketplace')).toBeTruthy();
  });
});
