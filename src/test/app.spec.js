import App from '../App';
import React from 'react';
import { render } from '@testing-library/react';

// please add your test cases here
describe('Testing Header Component', () => {
    test('render the name of the app', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("CPlayer");
        expect(linkElement).toBeInTheDocument;
    });
    test('render the name of the dashboard', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("Dashboard");
        expect(linkElement).toBeInTheDocument;
    })
    test('render the name of the favourite', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("Favourites");
        expect(linkElement).toBeInTheDocument;
    })
    test('render the name of the matches', () => {
        const { getByText } = render(<App />);
        const linkElement = getByText("Matches");
        expect(linkElement).toBeInTheDocument;
    })
})