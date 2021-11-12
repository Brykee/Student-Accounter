import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navigation from './Navigation';

export default function Account() {
  const [error] = useState('');
  const { currentUser } = useAuth();

  return (
    <>
      <Navigation />
      <Card>
        <Card.Body>
          <h2 className="mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br />
          <Link to="/update-profile" className="btn btn-primary w-30 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
