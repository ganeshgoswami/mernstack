import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import { AdminContext } from "../adminContext/adminContext";

const LoginPage = () => {
  const { setAdmin } = useContext(AdminContext);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      isAdmin: email === "admin@gmail.com", // Replace with actual admin check
    };

    if (email == "admin@gmail.com" && password == "1234") {
      setAdmin(email)
      navigate("/collection");
    } else if (email != "admin@gmail.com" || password != "1234") {
      alert("Invalid email or password")
      
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center login-page">
        <div
          className="col-6 shadow p-3 mb-5 bg-body-tertiary rounded rotate-card"
            style={{
              backgroundImage: "repeating-conic-gradient(#803100 8%, white 20%)",
            
            }}
        >
          <h2 className="text-center text">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
              />
            </div>
            <button type="submit" className="btn btn-success btn-sm btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
