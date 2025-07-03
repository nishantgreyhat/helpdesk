import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function Signin() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Helpdesk System</h2>
        <form>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="text" placeholder="Username" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="password" placeholder="Password" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Sign In</button>
          </div>
          <div className="auth-links">
            <Link to="/ForgotPass" className="forgot">Forgot Password?</Link>
            <Link to="/signup" className="signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
