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
import Login from '../Login';
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
describe('Login', () => {
  it('should render login page', async () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Email')).toBeInTheDocument();
    });
  });
});
