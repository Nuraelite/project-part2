import React, { useState } from 'react';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      window.location.href = '/dashboard';
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Redirecting to registration page...');
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
        <button type="button" className="register-button" onClick={handleRegister}>Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
