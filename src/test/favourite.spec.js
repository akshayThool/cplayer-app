import Favourite from '../Components/favourite/Favourite';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Favourite test cases',() => {
    test('should have Favourite component',() => {
        render(
            <Router>
                <Favourite/>
            </Router>
        )
    });
});