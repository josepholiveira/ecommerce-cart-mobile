/* eslint-disable import/first */

import React from 'react';

import { mocked } from 'ts-jest/utils';
import { render, fireEvent, wait } from '@testing-library/react-native';

jest.mock('../hooks/cart.tsx', () => ({
  __esModule: true,
  useCart: jest.fn().mockReturnValue({
    addToCart: jest.fn(),
    products: [],
  }),
}));

import Cart from '../pages/Cart';
import { useCart } from '../hooks/cart';

describe('Dashboard', () => {
  it('should be able to list products on the cart', async () => {
    const useCartMocked = mocked(useCart);

    useCartMocked.mockReturnValue({
      addToCart(item) {
        console.log(item);
      },
      products: [
        {
          id: '1234',
          title: 'Cadeira Rivatti',
          image_url:
            'https://http2.mlstatic.com/cadeira-rivatti-branca-pes-madeira-confortavel-bonita-D_NQ_NP_981901-MLB20422264882_092015-F.jpg',
          price: 400,
          quantity: 5,
        },
        {
          id: '12345',
          title: 'Poltrona de madeira',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRod5Tf0R0LkCjClrgAJU0tM713nyqHTP2lFbXU1o5zheYpwgfonTTde8swBNlahgij4hGeOgn7hQ&usqp=CAc',
          price: 600,
          quantity: 10,
        },
      ],
      increment: jest.fn(),
      decrement: jest.fn(),
    });

    const { getByText } = render(<Cart />);

    expect(getByText('Cadeira Rivatti')).toBeTruthy();
    expect(getByText('R$ 400,00x1')).toBeTruthy();
    expect(getByText('R$ 2.000,00')).toBeTruthy();

    expect(getByText('Poltrona de madeira')).toBeTruthy();
    expect(getByText('R$ 600,00x1')).toBeTruthy();
    expect(getByText('R$ 6.000,00')).toBeTruthy();

    expect(getByText('R$ 8.000,00')).toBeTruthy();
  });
});
