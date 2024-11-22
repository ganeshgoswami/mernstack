// src/Navbar.js
import React, { useContext } from "react";
import "../css/userNavbar.css";
import applogo from "../assets/applogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminContext } from "../adminContext/adminContext";

function UserNavbar() {
  const { alldata } = useContext(AdminContext);
  const categoryData = [];
  alldata.map((n) =>
    categoryData.indexOf(n.Category) == -1 ? categoryData.push(n.Category) : ""
  );

  return (
    <>
      <nav className="navbar p-2">
        <div className="navbar-logo">
          <img src={applogo} alt="" width={"20%"} />
        </div>
        <div className="navbar-search">
          <input type="text" placeholder={`Search Videos. . . ${alldata.length}`} />
          <button type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <ul className="navbar-menu">
          {/* <Link to={"/collection"} >collection</Link> */}
        </ul>
        <div className="navbar-icons">
          <span>
            <i class="fa-solid fa-venus-mars"></i>
          </span>
          <span>
            <i class="bi bi-gear"></i>
          </span>
        </div>
      </nav>

      <div className="navbar navbar-expand-lg bg-dark-subtle p-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Videos
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ maxHeight: "150px", overflowY: "auto" }}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Letest Video
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Red Alert
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  {categoryData.map((n) => (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          {n}
                        </a>
                      </li>
                    </>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Addition
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Update Soon
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default UserNavbar;
