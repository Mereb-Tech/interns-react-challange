import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActorList from '../components/ActorList';
import { useFetchActorsQuery } from '../api/slices/actorSlice';


jest.mock('../api/slices/actorSlice', () => ({
  useFetchActorsQuery: jest.fn(),
}));

describe('ActorList Component', () => {
  it('should display loading message while fetching actors', () => {
    useFetchActorsQuery.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    });

    render(<ActorList />);

    expect(screen.getByText('Loading actors...')).toBeInTheDocument();
  });

  it('should display error message if fetching fails', () => {
    useFetchActorsQuery.mockReturnValue({
      data: null,
      error: { message: 'Failed to fetch actors' },
      isLoading: false,
    });

    render(<ActorList />);

    expect(screen.getByText('Error loading actors: Failed to fetch actors')).toBeInTheDocument();
  });

  it('should display actors when data is fetched successfully', () => {
    useFetchActorsQuery.mockReturnValue({
      data: {
        results: [
          { name: 'Hana Guta', height: '165', mass: '55' },
          { name: 'John Doe', height: '202', mass: '136' },
        ],
      },
      error: null,
      isLoading: false,
    });

    render(<ActorList />);

    expect(screen.getByText('Hana Guta')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
