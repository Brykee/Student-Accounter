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
import '@testing-library/jest-dom';
import { render, waitFor, screen } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
import UpdateProfile from '../UpdateProfile';
describe('Update Profile', () => {
  it('should render Update Profile page', async () => {
    render(
      <AuthProvider>
        <UpdateProfile />
      </AuthProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });
});
