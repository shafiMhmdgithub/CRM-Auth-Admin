
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToken } from '../Auth/useToken';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = ({ toggleAuth, setIslogin }) => {
  const { loginWithRedirect } = useAuth0();
  const [token, setToken] = useToken();
  const navigate = useNavigate();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleFacebookLogin = async () => {
    try {
      await loginWithRedirect({
        connection: 'facebook',
        redirectUri: 'http://localhost:5173/dashboard',
      });
    } catch (error) {
      console.error('Facebook login failed', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithRedirect({
        connection: 'google-oauth2',
        redirectUri: 'http://localhost:5173/dashboard',
      });
    } catch (error) {
      console.error('Google login failed', error);
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
    navigate("/forgot-password");
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: emailValue,
        password: passwordValue,
      });
      const { token } = response.data;
      setToken(token);
      navigate('/dashboard');
    } catch (error) {
      console.log('Response not received:', error);
      setErrorMessage('Your credentials are not matching. Please try again.'); // Set error message
      setIslogin(true);
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message */}
            <form method="post" onSubmit={handleOnSubmit}>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  value={emailValue} 
                  onChange={e => setEmailValue(e.target.value)} 
                  className="form-control" 
                  placeholder="Email" 
                  required 
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input 
                  type="password" 
                  value={passwordValue} 
                  onChange={e => setPasswordValue(e.target.value)} 
                  className="form-control" 
                  placeholder="Password" 
                  required 
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mt-2 mb-3">
              <button className="btn btn-block btn-primary" onClick={handleFacebookLogin}>
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </button>
              <button className="btn btn-block btn-danger" onClick={handleGoogleLogin}>
                <i className="fab fa-google-plus mr-2" /> Sign in using Google
              </button>
            </div>
            <p className="mb-1">
              <a href="#" onClick={handleForgotPasswordClick}>I forgot my password</a>
            </p>
            <p className="mb-0">
              <Link to="#" onClick={toggleAuth} className="text-center">Register a new membership</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
