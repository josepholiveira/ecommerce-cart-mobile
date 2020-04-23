import React from 'react';
import 'react-native';
import '@react-navigation/native';

import { render, fireEvent, act } from '@testing-library/react-native';
import AxiosMock from 'axios-mock-adapter';
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

    apiMock.onGet('products').reply(200, [
      {
        id: '123',
        title: 'Cadeira Charles Eames',
        image_url:
          'https://madeiranit.ciaimg.com.br/Assets/Produtos/SuperZoom/cadeira-eiffel-preta-3.jpg?v=4627356f-1',
        price: 300,
      },
      {
        id: '1234',
        title: 'Cadeira Rivatti',
        image_url:
          'https://http2.mlstatic.com/cadeira-rivatti-branca-pes-madeira-confortavel-bonita-D_NQ_NP_981901-MLB20422264882_092015-F.jpg',
        price: 400,
      },
      {
        id: '12345',
        title: 'Poltrona Bona Rosa',
        image_url:
          'https://staticmobly.akamaized.net/p/Mobly-Poltrona-Bona-Rosa-3170-822255-1-zoom.jpg',
        price: 500,
      },
      {
        id: '123456',
        title: 'Poltrona de madeira',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRod5Tf0R0LkCjClrgAJU0tM713nyqHTP2lFbXU1o5zheYpwgfonTTde8swBNlahgij4hGeOgn7hQ&usqp=CAc',
        price: 600,
      },
    ]);

    fireEvent.press(getByTestId(`like-button-1234`));
    fireEvent.press(getByTestId(`like-button-1234`));

    await actWait();

    expect(getByText('Carrinho')).toBeTruthy();
  });
});
