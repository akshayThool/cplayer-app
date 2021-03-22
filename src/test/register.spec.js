import Register from '../Components/register/Register';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Register test cases',() => {
    test('should have Register component',() => {
        render(
            <Router>
                <Register/>
            </Router>
        )
    });
});