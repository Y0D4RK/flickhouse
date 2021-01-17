import { render, screen } from '@testing-library/react';
import WelcomeMessage from '../components/WelcomeMessage';

test('renders learn react link', () => {
  render(<WelcomeMessage />);
  const linkElement = screen.getByText(/Welcome on FlickHouse game/i);
  expect(linkElement).toBeInTheDocument();
});
