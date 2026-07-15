import { render, screen } from '@testing-library/react';
import Hero from './components/Hero';

test('renders Manish portfolio hero', () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { name: /Manish Kumar V/i })).toBeInTheDocument();
  expect(screen.getByText(/Full Stack Developer building scalable web applications/i)).toBeInTheDocument();
});
