import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

function ForgotPass() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Helpdesk System</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p style={{ textAlign: 'center', marginBottom: '24px', width: '60%' }}>
            Don't worry, Enter your email below and we will send you a link to change your password
          </p>
        </div>


        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <input type="email" placeholder="Email" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" >Submit</button>
        </div>

        <div className="auth-links" style={{ justifyContent: 'center' }}>
  <Link to="/" className="link-button">Sign In</Link>
</div>

      </div>
    </div>
  );
}

export default ForgotPass;
