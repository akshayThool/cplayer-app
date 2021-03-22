import Header from '../Components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';

describe('Header test cases', () => {
   test('should have Header component', () => {
      render(
         <Router>
            <Header />
         </Router>
      )
   });
});
