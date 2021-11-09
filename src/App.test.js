import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Haciendo pelix con redux y thunks/i);
  expect(linkElement).toBeInTheDocument();
});
