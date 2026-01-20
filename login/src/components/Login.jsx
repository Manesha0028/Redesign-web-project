import { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css';


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="page-wrapper">

      {/* NAVIGATION BAR */}
      <nav className="navbar">
        <div className="navbar-brand">Wasana Bakers</div>
      </nav>

      {/* SPLIT CONTAINER */}
      <div className="login-container">
        
        {/* LEFT IMAGE */}
        <div className="image-section">
          <img src="https://images.unsplash.com/photo-1602351447937-745cb720612f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D" alt="Login" />
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="login-section">
          <h1>Sweet to see you again!</h1>
          <p>Login to track your orders and save your favorite cakes</p>
   
          <label className ="login-data">Email Address </label>
          <input type="email" placeholder="Enter your email" />

         <label className ="login-data">Password</label>
          <div className="password-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span className="toggle-password" onClick={togglePassword}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot-wrapper">
            <span className="forgot-password">Forgot password?</span>
          </div>

          <button className="login-btn">Log In</button>

          <p className="divider-text">OR CONTINUE WITH</p>

          <div className="social-login">
            <button className="social-btn">
              <FaGoogle /> Google
            </button>
            <button className="social-btn">
              <FaFacebook /> Facebook
            </button>
          </div>

          <p className="signup-text">
            Don’t have an account?
            <span className="signup-link"> Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
