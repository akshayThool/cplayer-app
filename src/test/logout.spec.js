import Logout from '../Components/Logout';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Logout test cases',() => {
    test('should have Logout component',() => {
        render(
            <Router>
                <Logout/>
            </Router>
        )
    });
});