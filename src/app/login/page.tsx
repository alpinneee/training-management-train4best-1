"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* Kiri */}
      <div
        className={`w-1/2 text-white flex flex-col justify-center items-center p-10 relative bg-cover bg-center transition-transform duration-1000 ${animate ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          clipPath: "ellipse(100% 85% at 0% 50%)", // Adjusted to ensure the half-circle is not cut off and looks better
          backgroundColor: "#373A8D" // Light blue background color
        }}
      >
        <Image src="/img/LogoT4B.png" alt="Logo" className="absolute top-5 left-5 w-32" width={128} height={128} />
        <Image src="/img/illustration.svg" alt="Illustration" className="w-2/3 mb-5" width={256} height={256} /> {/* Kept the illustration image */}
        <h2 className="text-2xl font-bold">Welcome To Train4best</h2>
        <p className="mt-2">Customer Service: +62 821-3023-7117</p>
      </div>

      {/* Kanan */}
      <div
        className={`w-1/2 flex flex-col justify-center items-center p-10 transition-transform duration-1000 ${animate ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <h2 className="text-3xl font-semibold text-black">Sign In</h2> {/* Changed text color to black */}
        <p className="text-gray-500 mb-5">Login to your account</p>

        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-200 text-black placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-gray-600">Forgot Password?</a> {/* Changed text color to gray */}
          </div>
          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg mb-4">
            Login
          </button>
          <button
            type="button"
            className="w-full py-2 rounded-md bg-gray-300 text-gray-600 hover:bg-gray-400 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
