import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminContext } from "../../adminContext/adminContext";

const NavbarAdmin = () => {
  const { setAdmin } = useContext(AdminContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("adminlogin");
    setAdmin(null);
    navigate("/");
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary p-2"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div>
          <Link
            to="/admin/collection"
            className="nav-link text-warning me-3 fw-bold "
          >
            <b>Admin Panel</b>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link to="/admin/adminTable" className="nav-link">
                Video Table Store
              </Link>
            </li>

            <li className="nav-item me-3">
              <Link to="/admin/addCollecion" className="nav-link">
                Add Video
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <button className="btn btn-sm btn-danger" onClick={() => logout()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
