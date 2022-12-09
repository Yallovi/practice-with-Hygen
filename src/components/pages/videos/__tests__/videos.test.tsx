import React from 'react';
import { render, screen } from '@testing-library/react';
import { videos } from '../';

test('renders component successfully', () => {
  render(<videos  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});