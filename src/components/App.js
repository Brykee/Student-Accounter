import { Container } from 'react-bootstrap';
import AuthProvider from '../contexts/AuthContext';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import Account from './Account';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/account" component={Account} />
            <div className="bg">
              <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: '100vh' }}
              >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                  <PrivateRoute
                    path="/update-profile"
                    component={UpdateProfile}
                  />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </div>
              </Container>
            </div>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
