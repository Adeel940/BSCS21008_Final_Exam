import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Backend call to register user
    const response = await fetch('http://localhost:5000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
      console.log(data);
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-bold text-center">Signup</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
