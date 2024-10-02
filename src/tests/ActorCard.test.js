import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActorCard from '../components/ActorCard';

const mockActor = {
  name: 'Luke Skywalker',
  height: '172',
  birth_year: '19BBY',
};

test('renders actor card with name', () => {
  render(<ActorCard actor={mockActor} onSelectActor={() => {}} />);
  const nameElement = screen.getByText(/Luke Skywalker/i);
  expect(nameElement).toBeInTheDocument();
});

test('renders actor details', () => {
  render(<ActorCard actor={mockActor} onSelectActor={() => {}} />);
  const heightElement = screen.getByText(/Height: 172/i);
  expect(heightElement).toBeInTheDocument();
  const birthYearElement = screen.getByText(/Birth Year: 19BBY/i);
  expect(birthYearElement).toBeInTheDocument();
});

test('calls onSelectActor when detail button is clicked', () => {
  const onSelectActorMock = jest.fn();
  render(<ActorCard actor={mockActor} onSelectActor={onSelectActorMock} />);

  const detailButton = screen.getByText(/Details/i);
  fireEvent.click(detailButton);

  expect(onSelectActorMock).toHaveBeenCalledWith(mockActor);
});
