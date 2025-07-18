import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_HOST_IP}/register`, { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "100vh" }}>
      <div className="card shadow-lg p-4 border-0 rounded-4" style={{ width: "24rem" }}>
        <h3 className="mb-4 text-center fw-bold text-primary">Create Your Account</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control rounded-pill"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control rounded-pill"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary rounded-pill fw-semibold shadow-sm">Register</button>
          </div>
        </form>
        <div className="text-center">
          <small className="text-muted">Already have an account?</small><br />
          <Link to="/login" className="btn btn-outline-secondary rounded-pill mt-2 w-100 fw-semibold">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;

