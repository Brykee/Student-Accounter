jest.mock('../../firebase.js', () => ({
  auth: { onAuthStateChanged: jest.fn((x) => x()) },
}));
jest.mock('react-router-dom');
import Login from '../Login';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { AuthContext, AuthProvider } from '../../contexts/AuthContext';
describe('Login', () => {
  const mockedFunctions = {
    login: jest.fn(),
    signup: jest.fn(),
    logout: jest.fn(),
    resetPassword: jest.fn(),
    updateEmail: jest.fn(),
    updatePassword: jest.fn(),
  };
  test('should render login page', async () => {
    render(
      <AuthContext.Provider value={jest.fn()}>
        <Login />
      </AuthContext.Provider>
    );
    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
  });
});
