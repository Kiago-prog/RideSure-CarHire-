import React from "react";

const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-6 text-yellow-500">Sign Up</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-white py-2 rounded hover:bg-yellow-500 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
