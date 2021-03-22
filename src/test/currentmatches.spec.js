import CurrentMatches from '../Components/CurrentMatches/CurrentMatches';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('CurrentMatches test cases',() => {
    test('should have CurrentMatches component',() => {
        render(
            <Router>
                <CurrentMatches/>
            </Router>
        )
    });
});