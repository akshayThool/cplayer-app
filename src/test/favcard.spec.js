import favCard from '../Components/favCard/FavCard';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('favCard test cases',() => {
    test('should have favCard component',() => {
        render(
            <Router>
                <favCard/>
            </Router>
        )
    });
});