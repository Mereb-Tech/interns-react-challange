import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActorDetails from '../components/ActorDetails';

const mockActor = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
};

test('renders actor details correctly', () => {
  render(<ActorDetails actor={mockActor} onClose={() => {}} />);

  const nameElement = screen.getByText(/Luke Skywalker/i);
  expect(nameElement).toBeInTheDocument();

  const heightElement = screen.getByText(/Height:/i);
  expect(heightElement).toBeInTheDocument();
});

test('calls onClose when close button is clicked', () => {
  const onCloseMock = jest.fn();
  render(<ActorDetails actor={mockActor} onClose={onCloseMock} />);

  const closeButton = screen.getByText(/Close/i);
  fireEvent.click(closeButton);

  expect(onCloseMock).toHaveBeenCalled();
});
