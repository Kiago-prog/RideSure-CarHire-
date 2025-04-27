import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signing up with', email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-sm">
       <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Sign Up
       </h2>

      <form onSubmit={handleSubmit} className= "space-y-6">
         
          {/* Email Field */}
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

          {/* Password Field */}
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>
          
          {/* Confirm Password */}
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition">Sign Up</button>

        <div className="text-center mt-4">
            <a href="/login" className="text-blue-600 hover:underline">
              Already have an account? Log in
            </a>
        </div>

      </form>
     </div>
    </div>
  );
}

export default Signup;
