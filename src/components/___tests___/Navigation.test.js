jest.mock('../../firebase.js', () => ({
  auth: {
    onAuthStateChanged: (callback) => callback({ email: 'test@gmail.com' }),
  },
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  Link: ({ children }) => <div>{children}</div>,
}));
import React from 'react';
import Navigation from '../Navigation';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
describe('Navigation', () => {
  it('should render the Navigation', async () => {
    render(
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Student Accounter')).toBeInTheDocument();
    });
  });
});
