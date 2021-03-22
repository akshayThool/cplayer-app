import Dashboard from '../Components/dashboard/Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Dashboard test cases',() => {
    test('should have Dashboard component',() => {
        render(
            <Router>
                <Dashboard/>
            </Router>
        )
    });
});

