import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActorDetail from '../components/ActorDetail';

describe('ActorDetail Component', () => {
    const mockActor = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.dev/api/planets/1/',
        films: ['Film 1', 'Film 2'],
        vehicles: ['Vehicle 1'],
        starships: ['Starship 1']
    };
    
    it('should call the onClose handler when the close button is clicked', () => {
        const onCloseMock = jest.fn();
        render(<ActorDetail actor={mockActor} onClose={onCloseMock} />);

        fireEvent.click(screen.getByText('Close'));

        expect(onCloseMock).toHaveBeenCalled();
    });
});
