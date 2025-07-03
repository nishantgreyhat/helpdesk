import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 style={{ marginBottom: '20px' }}>Helpdesk System</h2>
        <p style={{ textAlign: 'center', marginBottom: '25px' }}>Sign up here</p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="text" placeholder="Username" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="password" placeholder="Password" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="email" placeholder="Email" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit">Sign Up</button>
        </div>

        <div className="auth-links">
          <Link to="/ForgotPass" className="forgot">Forgot Password?</Link>
          <Link to="/" className="signup">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

