import { render, screen } from '@testing-library/react';
import GameOver from '../components/GameOver';

test('renders learn react link', () => {
  render(<GameOver />);
  const linkElement = screen.getByText(/Game over/i);
  expect(linkElement).toBeInTheDocument();
});
