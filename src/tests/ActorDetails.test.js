import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fetchData } from '../utils/fetchData';
import ActorDetails from '../pages/ActorDetails';

// Mock the fetchData function
jest.mock('../utils/fetchData');

describe('ActorDetails Component', () => {
  const mockActorData = {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    gender: 'male',
    mass: '77',
    height: '172',
    eye_color: 'blue',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: ['https://swapi.dev/api/films/1/'],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/14/'],
    starships: ['https://swapi.dev/api/starships/12/'],
  };

  const mockHomeworldData = { name: 'Tatooine' };
  const mockFilmData = { title: 'A New Hope' };
  const mockVehicleData = { name: 'Snowspeeder' };
  const mockStarshipData = { name: 'X-wing' };

  beforeEach(() => {
    fetchData.mockClear();
  });

  test('should render the loader initially', () => {
    render(<ActorDetails />);
    expect(screen.getByAltText('loading')).toBeInTheDocument();
  });

 });
