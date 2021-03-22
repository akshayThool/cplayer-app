import Login from '../Components/login/Login';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Login test cases',() => {
    test('should have Login component',() => {
        render(
            <Router>
                <Login/>
            </Router>
        )
    });
});