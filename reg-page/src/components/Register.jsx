import { useState } from "react";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      {/* ===== NAVIGATION BAR ===== */}
      <nav className="navbar">
        <div className="nav-left">Wasana Bakers</div>
        <div className="nav-right">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">Specials</a>
          <button className="signin-btn">Sign In</button>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="main-container">

        {/* LEFT IMAGE */}
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNha2V8ZW58MHx8MHx8fDA%3D"
            alt="Cake"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="form-section">
          <h1>Join the Wasana Family</h1>
          <p className="subtitle">Create an account to tack your orders and save your favorite cakes</p>

          <button className="social-btn google">
            <FaGoogle /> Continue with Google
          </button>

          <button className="social-btn facebook">
            <FaFacebook /> Continue with Facebook
          </button>

          <p className="subtitle">or Register with email</p>

          <div className="divider">OR</div>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" />
            </div>

            <div className="password-row">
              <div className="form-group password-field">
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="form-group password-field">
                <label>Confirm Password</label>
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                />
                <span onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <button className="register-btn">Create Account</button>
          </form>

          <p className="already-account">
              Already have an account?
              <span className="login-link"> Login</span>
          </p>

        </div>
      </div>
    </>
  );
}

