import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberAttribute from '../components/NumberAttribute';

test('renders NumberAttribute component', () => {
  render(<NumberAttribute />);
  
  expect(screen.getByText(/Number Attributes/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Check/i })).toBeInTheDocument();
});

test('displays attributes correctly after successful fetch', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ value: 7, isPrime: "Yes", isOdd: true, squareRoot: 2.6458 }),
    })
  );
  render(<NumberAttribute />);
  fireEvent.change(screen.getByPlaceholderText('Enter a number'), { target: { value: '7' } });
  fireEvent.click(screen.getByText('Check'));
  expect(await screen.findByText(/Value: 7/)).toBeInTheDocument();
  expect(await screen.findByText(/Is Prime: Yes/)).toBeInTheDocument();
  expect(await screen.findByText(/Is Odd: true/)).toBeInTheDocument();
});
