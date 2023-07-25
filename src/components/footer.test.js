import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('check insta link', () => {
  render(<Footer />);
  const linkElement = screen.getByTestId('insta-link');
  expect(linkElement.href).toContain('https://www.instagram.com/invites/contact/?i=1kzibxf4t4osi&utm_content=n3jal51');
});
