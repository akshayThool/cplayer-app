
import Card from '../Components/card/Card';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have Card component',() => {
        render(
            <Router>
                <Card/>
            </Router>
        )
    });
});
