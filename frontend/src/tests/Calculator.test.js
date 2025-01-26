import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders Calculator component and checks initial elements', () => {
  render(<Calculator />);
  
  expect(screen.getByText(/Basic Calculator/i)).toBeInTheDocument();
  expect(screen.getByText(/Calculate/i)).toBeInTheDocument();
});

test('user can input numbers and select operation', () => {
  render(<Calculator />);
  
  const inputA = screen.getByLabelText('A:');
  const inputB = screen.getByLabelText('B:');
  
  fireEvent.change(inputA, { target: { value: '10' } });
  fireEvent.change(inputB, { target: { value: '5' } });
  
  expect(inputA.value).toBe('10');
  expect(inputB.value).toBe('5');
});
