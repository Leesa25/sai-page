import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login:", loginData);

    // Add your API/login logic here
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Register:", registerData);

  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
      <section className="hero-section">

        <div className="brand">
          SAI
        </div>

        <div className="hero-content">

          <h1>
            Sales tracking.
            <br />
            Send <span>invoices.</span>
            <br />
            Get paid.
          </h1>

          <p className="hero-description">
            Sales pipelines, invoice generation, and
            <br />
            payment tracking — unified in one clean
            <br />
            workspace.
          </p>

          <div className="statistics">

            <div className="stat">
              <strong>$2.4M</strong>
              <small>INVOICED MONTHLY</small>
            </div>

            <div className="stat">
              <strong>90%+</strong>
              <small>BILLS ACCURACY</small>
            </div>

            <div className="stat">
              <strong>4 min</strong>
              <small>AVG. INVOICE TIME</small>
            </div>

          </div>

          <div className="testimonial">

            <p>
              "Cut our invoicing time in half and reduced
              overdue payments by 40%."
            </p>

            <div className="person">

              <div className="avatar">
                RM
              </div>

              <div>
                <strong>Ritshidze Mugeri</strong>
                <span>VP Sales, Group 18</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* RIGHT SIDE */}
      <section className="form-section">

        <div className="auth-container">

          {/* TABS */}
          <div className="tabs">

            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Sign in
            </button>

            <button
              className={activeTab === "register" ? "active" : ""}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>

          </div>


          {/* LOGIN */}
          {activeTab === "login" && (

            <div className="form-content">

              <h2>Welcome back</h2>

              <p className="subtitle">
                Sign in to continue to your workspace.
              </p>

              <form onSubmit={handleLogin}>

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />


                <label>Password</label>

                <div className="password-wrapper">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>

                </div>


                <div className="forgot">
                  <button type="button">
                    Forgot password?
                  </button>
                </div>


                <button className="primary-button" type="submit">
                  Sign in
                </button>

              </form>


              <div className="switch-text">
                No account yet?{" "}
                <button onClick={() => setActiveTab("register")}>
                  Create one
                </button>
              </div>


              <div className="divider">
                <span></span>
                <p>or</p>
                <span></span>
              </div>


              <button className="social-button">
                <span className="google-icon">G</span>
                Continue with Google
              </button>

              <button className="social-button">
                <span className="github-icon">◉</span>
                Continue with GitHub
              </button>

            </div>

          )}


          {/* REGISTER */}
          {activeTab === "register" && (

            <div className="form-content register-content">

              <h2>Create your account</h2>

              <p className="subtitle">
                Join thousands of teams building with Aurum.
              </p>

              <form onSubmit={handleRegister}>

                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Maren Fischer"
                  value={registerData.name}
                  onChange={handleRegisterChange}
                  required
                />


                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  required
                />


                <label>Password</label>

                <div className="password-wrapper">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Min. 8 characters"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    minLength="8"
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>

                </div>


                <label>Confirm Password</label>

                <div className="password-wrapper">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="••••••••"
                    value={registerData.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                  >
                    {showConfirmPassword ? "◉" : "◌"}
                  </button>

                </div>


                <button
                  className="primary-button"
                  type="submit"
                >
                  Create account
                </button>

              </form>


              <div className="switch-text">
                Already have an account?{" "}
                <button onClick={() => setActiveTab("login")}>
                  Sign in
                </button>
              </div>


              <div className="divider">
                <span></span>
                <p>or</p>
                <span></span>
              </div>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default App;
