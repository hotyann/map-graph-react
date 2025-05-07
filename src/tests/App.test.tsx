import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  test('renders Sample text', () => {
    render(<App />);
    const textElement = screen.getByText(/sample/i);
    expect(textElement).toBeInTheDocument();
  });
});
