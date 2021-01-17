import { render, screen } from '@testing-library/react';
import Question from '../components/Question';

test('renders learn react link', () => {
  render(<Question />);
  const linkElement = screen.getByText(/Did/i);
  expect(linkElement).toBeInTheDocument();
});
