// src/Navbar.js
import React, { useContext, useState } from "react";
import "../UserNavbar/userNavbar.css";
import { AdminContext } from "../../adminContext/adminContext";
import "../../css/SearchBar.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function UserNavbar() {
  const { alldata } = useContext(AdminContext);
  const [searchCountry, setSearchCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const categoryData = [];
  alldata.map((n) =>
    categoryData.indexOf(n.Category) == -1 ? categoryData.push(n.Category) : ""
  );

  const searchCountryName = () => {
    console.log(searchCountry);
  };

  return (
    <>
      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "rgb(35 39 48)" }}
      >
        <div className="container-xxl p-2">
          <div className="col-2 d-flex">
            <button
              className="btn btn-primary navbar-toggler bg-white"
              type="button"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-1 d-flex align-middle">
              <Link to="/" className="nav-link text-warning me-3 fw-bold ">
                <h3 className="text-danger">
                  <b>XMaster</b>
                </h3>
              </Link>
            </div>
          </div>

          <div className="searchBarHide col-8">
            <div className="input-group">
              <input
                type="text"
                className="form-control p-3 border-0"
                placeholder={"Search " + alldata.length + " Videos ..."}
                aria-label="Search Videos"
                value={searchCountry}
              />
              <span className="input-group-text bg-white border-0">
                <i
                  className="bi bi-search"
                  onClick={() => searchCountryName()}
                ></i>
              </span>
            </div>
          </div>

          <div className="col-2 ">
            <div className="btn-group">
              <i
                className="bi bi-gear text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></i>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark">
                <div className="dropdown-item bg-dark">
                  <Link className="text-white" to={"/help"}>
                    <i className="bi bi-info-circle m-1"></i>Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="input-group downShowSearchBar m-2">
          <input
            type="text"
            className="form-control"
            placeholder={"Search " + alldata.length + " Videos ..."}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-sm btn-outline-light"
            type="button"
            id="button-addon2"
          >
            <i className="bi bi-search text-light"></i>
          </button>
        </div>
      </nav>
      {/* Navbar Finish */}

      {/* side navbar start */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header container">
          <div className="col-2">
            <button
              type="button"
              className="btn-close btn-sm p-0 m-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="col-8 d-flex justify-content-center">
            <div className="ms-1">
              <Link to="/home" className="nav-link text-warning me-3 fw-bold ">
                <h3 className="text-danger">
                  <b>X Master</b>
                </h3>
              </Link>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="offcanvas-body bg-secondary-subtle">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="bi bi-camera-reels text-dark me-2"></i> Videos
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <li>
                      <Link className="dropdown-item">Popular</Link>
                      <hr />
                    </li>
                    <li>
                      <Link className="dropdown-item">Letest Video</Link>

                      <hr />
                    </li>
                    <li>
                      <Link className="dropdown-item"> Red Alert</Link>

                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="bi bi-bezier2 text-dark me-2"></i> Category
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <li
                      onClick={() => navigate(`/home`)}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      All
                    </li>
                    <hr />
                    {categoryData.map((n) => (
                      <>
                        <li
                          onClick={() => navigate(`/home/${n}`)}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          key={n}
                        >
                          {n}
                          <hr />
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="bi bi-plus-lg text-dark me-2"></i> New Addition
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <li>
                      Update Soon
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side navbar finish */}

      {/*navbar with dropdown start */}
      <div className="navbar navbar-expand-lg bg-dark-subtle p-0 dropDownHide">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Videos
                </Link>

                <ul
                  className="dropdown-menu dropdown-content"
                  style={{ maxHeight: "190px", overflowY: "auto" }}
                >
                  <li>
                    <Link className="dropdown-item">Popular</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">Letest Video</Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item">Red Alert</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul
                  className="dropdown-menu dropdown-content"
                  style={{ maxHeight: "400px", overflowY: "auto" }}
                >
                  <li onClick={() => navigate(`/home`)}>
                    <Link className="dropdown-item">All</Link>
                  </li>
                  {categoryData.map((n) => (
                    <>
                      <li key={n}>
                        <hr className="dropdown-divider" />
                      </li>
                      <li onClick={() => navigate(`/home/${n}`)}>
                        <Link className="dropdown-item">{n}</Link>
                      </li>
                    </>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  New Addition
                </Link>
                <ul className="dropdown-menu dropdown-content">
                  <li>
                    <Link className="dropdown-item">Update Soon</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* dropdown with navbar Finish */}
    </>
  );
}

export default UserNavbar;
