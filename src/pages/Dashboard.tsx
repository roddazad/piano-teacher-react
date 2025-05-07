import React, { useState, useEffect, useContext } from 'react';
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaMusic, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [notes, setNotes] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchNotes();
    }
  }, [user]);

  const fetchNotes = async () => {
    try {
      const res = await api.get('/student/notes');
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = isLogin ? '/auth/login' : '/auth/register';
      const body = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password, role: "student" };

      const res = await api.post(url, body);

      login(res.data.user, res.data.token);
    } catch (err) {
      console.error(err);
      alert('Login/Register failed');
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    const fakeUser = {
      name: 'Google User',
      email: 'user@gmail.com'
    };

    login(fakeUser as any, 'google-fake-token');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  if (!user) {
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
  }

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

        <h2>Your Notes:</h2>
        <ul>
          {notes.map(note => (
            <li key={note._id}>
              <a href={`http://localhost:5000/uploads/${note.file}`} target="_blank" rel="noreferrer">
                {note.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;