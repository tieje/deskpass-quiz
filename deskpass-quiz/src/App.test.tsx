import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RemoveAllQuotes } from './utils/utils';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('RemoveAllQuotes Function', () => {
  const a = '"He"l""lo ""World!"'
  const res = 'Hello World!'
  expect(RemoveAllQuotes(a)).toEqual(res)
})
