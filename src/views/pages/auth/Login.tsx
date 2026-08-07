import { Link } from "react-router";

function Login() {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card " style={{ maxWidth: "420px", width: "100%" }}>
          <div className="card-body p-5">
            <div className="text-center mb-3">
              <Link to="index.html" className="mb-4 d-inline-block">
                <img
                  src="data:image/svg+xml,%3csvg%20width='62'%20height='67'%20viewBox='0%200%2062%2067'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M30.604%2066.378L0.00805664%2048.1582V35.7825L30.604%2054.0023V66.378Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2048.1582L30.604%2066.378V54.0023L61.1996%2035.7825V48.1582Z'%20fill='%23E66239'/%3e%3cpath%20d='M30.5955%200L0%2018.2198V30.5955L30.5955%2012.3757V0Z'%20fill='%23657E92'/%3e%3cpath%20d='M61.191%2018.2198L30.5955%200V12.3757L61.191%2030.5955V18.2198Z'%20fill='%23A3B2BE'/%3e%3cpath%20d='M30.604%2048.8457L0.00805664%2030.6259V18.2498L30.604%2036.47V48.8457Z'%20fill='%23302C4D'/%3e%3cpath%20d='M61.1996%2030.6259L30.604%2048.8457V36.47L61.1996%2018.2498V30.6259Z'%20fill='%23E66239'/%3e%3c/svg%3e"
                  alt=""
                  width="36"
                />
                <span className=" ms-2">
                  {" "}
                  <img src="./assets/images/logo.svg" alt="" />
                </span>
              </Link>
              <h1 className="card-title mb-5 h5">Sign in to your account</h1>
            </div>

            <form className="needs-validation mt-3" noValidate>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  required
                  autoFocus
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label d-flex justify-content-between"
                >
                  <span>Password</span>
                  <Link to="/" className="small link-primary">
                    Forgot Password?
                  </Link>
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  minLength={6}
                />
                <div className="invalid-feedback">
                  Please provide a password (min 6 characters).
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    id="remember"
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label className="form-check-label small" htmlFor="remember">
                    Remember me
                  </label>
                </div>
              </div>

              <Link to="/" className="btn btn-primary w-100" type="submit">
                Sign in
              </Link>
            </form>

            <div className="text-center mt-3 small text-muted">
              Don't have an account?{" "}
              <Link to="signup.html" className="link-primary">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
