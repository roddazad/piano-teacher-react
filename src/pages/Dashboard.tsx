import React, { useState, useEffect } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaMusic, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

interface User {
  name: string;
  email: string;
}

const Dashboard: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login/signup
    const userData = {
      name: isLogin ? 'Demo User' : formData.name,
      email: formData.email
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    const userData = {
      name: 'Google User',
      email: 'user@gmail.com'
    };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  if (isAuthenticated && user) {
    return (
      <div className="dashboard-container">
        <nav className="dashboard-nav">
          <div className="nav-brand">
            <FaMusic className="nav-icon" />
            <span>Piano Portal</span>
          </div>
          <div className="nav-user">
            <span className="user-name">{user.name}'s Dashboard</span>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </nav>
        <div className="dashboard-main">
          <h1>Welcome back, {user.name}!</h1>
          {/* Add your dashboard content here */}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <FaMusic className="dashboard-icon" />
          <h1>Welcome to Piano Portal</h1>
          <p>{isLogin ? 'Sign in to your account' : 'Create your account'}</p>
        </div>

        <div className="auth-container">
          <button className="google-auth-btn" onClick={handleGoogleLogin}>
            <FaGoogle />
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            {isLogin && (
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="toggle-form">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={toggleForm} className="toggle-btn">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 