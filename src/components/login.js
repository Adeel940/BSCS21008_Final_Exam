// import React, { useState } from 'react';

// const Login = () => {
//   const [credentials, setCredentials] = useState({ username: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Backend call to authenticate user
//     const response = await fetch('http://localhost:5000/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(credentials),
//     });
//     const data = await response.json();
//     if (response.ok) {
//       alert('Login successful!');
//       console.log(data);
//       // Redirect or save token
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form className="w-full max-w-sm p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
//         <h2 className="mb-4 text-xl font-bold text-center">Login</h2>
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium" htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={credentials.username}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium" htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded"
//             required
//           />
//         </div>
//         <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (response.ok) {
      alert('Login successful!');
      navigate('/tasks'); // Redirect to tasks page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="w-full max-w-sm p-4 bg-white rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-xl font-bold text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
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
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
