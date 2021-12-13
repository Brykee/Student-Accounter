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
import Signup from '../Signup';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
describe('Signup', () => {
  it('should render the Sign Up page', async () => {
    render(
      <AuthProvider>
        <Signup />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Password Confirmation')).toBeInTheDocument();
    });
  });
});
