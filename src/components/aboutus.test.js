import { render, screen } from '@testing-library/react';
import AboutUs from './Aboutus';

test('renders learn react link', () => {
  render(<AboutUs />);
  const linkElement = screen.getByText('Welcome to our Interior Designer Firm!');
  expect(linkElement).toBeInTheDocument();
});
