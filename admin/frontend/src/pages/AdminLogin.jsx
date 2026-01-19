// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import {
  MdMail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdArrowBack,
  MdCake,
  MdBakeryDining
} from 'react-icons/md';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        // For demo: only "admin@wasanabakers.com" / "password123" works
        if (formData.email === 'admin@wasanabakers.com' && formData.password === 'password123') {
          console.log('Login successful');
          // Redirect logic here (e.g., navigate('/dashboard'))
        } else {
          setLoginError('Invalid credentials. Please try again.');
        }
        setIsSubmitting(false);
      }, 1000);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen w-full flex-row overflow-hidden bg-background-light dark:bg-background-dark text-[#181311] dark:text-white transition-colors duration-200">
      {/* Left Side: Hero Image Section */}
      <div className="hidden lg:flex w-1/2 relative bg-primary/10">
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCE6r9KgzGPtjvdVUfUOn8Y6T57J4Q3vzsYZJ-vxWAp3X8p6wB-5nS5lS1ChfkrdGTUSjNF0xo_YHNSyRLa0UCnRtAxtdHNjg7X8YXoc1PGGwnfjKoL8soX1bOKaxhggaZDUuSv38pTeLcJBG1_yNLr0BIoljcnEiqWF82SmB1jl83gQ2TOMHZWOTWEgdpowTz14XBO327Bad8oCsnB6mg902-41Mx8cQC4Gw5STsMZIJDkquJa0rMKz6jjhC3mZx3arnVzZrpIK1E')`
          }}
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent mix-blend-multiply"></div>
        <div className="relative z-10 flex flex-col justify-end p-12 w-full text-white">
          <div className="mb-6">
            <span className="inline-block p-3 rounded-full bg-primary/90 text-white mb-4 shadow-lg backdrop-blur-sm">
              <MdCake className="text-3xl" />
            </span>
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] mb-4 drop-shadow-md">
              Crafting Sweet Moments<br/>Since 1998
            </h1>
            <p className="text-lg font-medium opacity-90 max-w-md drop-shadow-sm">
              Manage your inventory, track orders, and delight customers with the Wasana Bakers Admin Portal.
            </p>
          </div>
          <div className="text-sm opacity-70">
            © 2024 Wasana Bakers. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Side: Login Form Section */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center items-center p-6 lg:p-24 overflow-y-auto">
        <div className="w-full max-w-[480px] flex flex-col gap-8">
          {/* Header */}
          <div className="flex flex-col gap-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-md">
                <MdBakeryDining className="text-xl" />
              </div>
              <h2 className="text-2xl font-black tracking-tight text-[#181311] dark:text-white">Wasana Bakers</h2>
            </div>
            <h1 className="text-3xl font-bold text-[#181311] dark:text-white">Admin Login</h1>
            <p className="text-[#896b61] dark:text-gray-400 text-base">
              Please enter your details to access the dashboard.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[#181311] dark:text-gray-200 text-sm font-medium leading-normal">
                Email Address
              </label>
              <div className={`flex w-full items-stretch rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all ${errors.email ? 'ring-2 ring-red-500' : ''}`}>
                <div className="text-[#896b61] dark:text-gray-400 flex bg-white dark:bg-[#2a1d18] border border-r-0 border-[#e6dedb] dark:border-[#4a3b36] items-center justify-center pl-4 rounded-l-lg select-none">
                  <MdMail className="text-[20px]" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#181311] dark:text-white focus:outline-0 focus:ring-0 border border-l-0 border-[#e6dedb] dark:border-[#4a3b36] bg-white dark:bg-[#2a1d18] h-12 px-4 text-base font-normal placeholder:text-[#896b61] dark:placeholder:text-gray-500 focus:border-primary dark:focus:border-primary transition-colors`}
                  placeholder="admin@wasanabakers.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5 w-full">
              <div className="flex justify-between items-center">
                <label className="text-[#181311] dark:text-gray-200 text-sm font-medium leading-normal">
                  Password
                </label>
                <a 
                  href="#" 
                  className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Forgot password functionality would go here');
                  }}
                >
                  Forgot Password?
                </a>
              </div>
              <div className={`flex w-full items-stretch rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all ${errors.password ? 'ring-2 ring-red-500' : ''}`}>
                <div className="text-[#896b61] dark:text-gray-400 flex bg-white dark:bg-[#2a1d18] border border-r-0 border-[#e6dedb] dark:border-[#4a3b36] items-center justify-center pl-4 rounded-l-lg select-none">
                  <MdLock className="text-[20px]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#181311] dark:text-white focus:outline-0 focus:ring-0 border border-l-0 border-[#e6dedb] dark:border-[#4a3b36] bg-white dark:bg-[#2a1d18] h-12 px-4 text-base font-normal placeholder:text-[#896b61] dark:placeholder:text-gray-500 focus:border-primary dark:focus:border-primary transition-colors`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-0 pr-3 flex items-center h-12 pointer-events-auto"
                >
                  {showPassword ? (
                    <MdVisibilityOff className="text-[20px] text-[#896b61] dark:text-gray-400" />
                  ) : (
                    <MdVisibility className="text-[20px] text-[#896b61] dark:text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Action Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#ee5c2b] hover:bg-[#d94a1a] text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md transition-all active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Feedback Area */}
          {loginError && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm text-center border border-red-100 dark:border-red-900/30">
              {loginError}
            </div>
          )}

          {/* Footer Links */}
          <div className="flex flex-col items-center gap-4 mt-4">
            <a 
              href="/" 
              className="flex items-center gap-2 text-sm font-medium text-[#896b61] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/'; // or use React Router
              }}
            >
              <MdArrowBack className="text-[18px]" />
              Back to Store
            </a>
          </div>
        </div>

        {/* Mobile Footer Copyright */}
        <div className="mt-12 lg:hidden text-xs text-[#896b61] dark:text-gray-500 text-center">
          © 2024 Wasana Bakers. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;