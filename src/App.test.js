import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'

test('renders loading message', () => {
  render(<App />);
  const loadingElement = screen.getByText(/loading actors.../i);
  expect(loadingElement).toBeInTheDocument();
});
