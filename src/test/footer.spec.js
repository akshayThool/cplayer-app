import Footer from '../Components/footer/Footer';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Footer test cases',() => {
    test('should have Footer component',() => {
        render(
            <Router>
                <Footer/>
            </Router>
        )
    });
});