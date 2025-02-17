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

test('calculates addition correctly on form submission', async () => {
  // Mock global fetch para simular respuesta del backend
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ result: 15 }),
    })
  );
  render(<Calculator />);
  fireEvent.change(screen.getByLabelText('A:'), { target: { value: '10' } });
  fireEvent.change(screen.getByLabelText('B:'), { target: { value: '5' } });
  fireEvent.click(screen.getByText('Calculate'));
  // Esperar a que aparezca el resultado 15
  expect(await screen.findByText(/15/)).toBeInTheDocument();
});
