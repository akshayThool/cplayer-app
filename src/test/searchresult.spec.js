import SearchResult from '../Components/SearchResult/SearchResult';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('SearchResult test cases',() => {
    test('should have SearchResult component',() => {
        render(
            <Router>
                <SearchResult/>
            </Router>
        )
    });
});