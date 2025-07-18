import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../login';

test('renders Login form and allows input', () => {
  render(<Login />, { wrapper: MemoryRouter });

  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Email address/i), { target: { value: 'test@example.com' } });
  expect(screen.getByLabelText(/Email address/i).value).toBe('test@example.com');
});

