import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders FirmFacts component', () => {
    render(<App />);
    expect(screen.getByTestId('firm-facts')).toBeInTheDocument();
  });
});
