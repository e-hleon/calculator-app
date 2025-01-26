import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberAttribute from '../components/NumberAttribute';

test('renders NumberAttribute component', () => {
  render(<NumberAttribute />);
  
  expect(screen.getByText(/Number Attributes/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Check/i })).toBeInTheDocument();
});
