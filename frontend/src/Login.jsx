import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(''); // username state
  const [password, setPassword] = useState(''); // password state
  const [error, setError] = useState(''); // error state
  const navigate = useNavigate(); // for navigation after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // reset error message
    try {
      // POST request to the backend for login using username and password
      const res = await axios.post('http://localhost:4000/login', { username, password }).then((data)=>{
        localStorage.setItem('token', data.data.token);

      // Redirect to dashboard after successful login
      navigate('/dashboard');
      }).catch((err)=>alert(err.message));

      // Store token in localStorage
      
    } catch (err) {
      // Set error message for invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;