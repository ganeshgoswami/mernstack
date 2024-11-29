// src/Navbar.js
import React, { useContext, useState } from "react";
import "../css/userNavbar.css";
import applogo from "../assets/applogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminContext } from "../adminContext/adminContext";
import "../css/SearchBar.css";
import { useNavigate, useParams } from "react-router-dom";

function UserNavbar() {
  const { alldata } = useContext(AdminContext);
  const [searchCountry,setSearchCountry] = useState(null);
  const navigate = useNavigate()
  const {cate} = useParams();
  
  const categoryData = [];
  alldata.map((n) =>
    categoryData.indexOf(n.Category) == -1 ? categoryData.push(n.Category) : ""
  );

  const searchCountryName =() =>{
    console.log(cate)
  // const searchData = searchCountry ? alldata.filter((filt)=> filt.Category.toUpperCase() == searchCountry.toUpperCase()) : [];
  }

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
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarSupportedContent"
              // aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-1 d-flex align-middle">
              <a className="navbar-brand" href="#">
                <h3 className="text-danger">
                  <b>X Master</b>
                </h3>
              </a>
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
                <i class="bi bi-search" onClick={() => searchCountryName()}></i>
              </span>
            </div>
          </div>

          <div className="col-2">
            <i className="bi bi-gear text-white"></i>
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
            <i class="bi bi-search text-light"></i>
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
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="col-8 d-flex justify-content-center">
            <div className="ms-1">
              <a className="navbar-brand d-flex" href="#">
                <h3 className="text-danger">
                  <b>X</b>
                </h3>
                <p className="m-1">Master</p>
              </a>
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
                  <i class="bi bi-camera-reels text-dark me-2"></i> Videos
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <li>
                      <a className="dropdown-item" href="/#">
                        Popular
                      </a>
                      <hr />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Letest Video
                      </a>
                      <hr />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Red Alert
                      </a>
                      <hr />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i class="bi bi-bezier2 text-dark me-2"></i> Category
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
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
                        >
                          <a className="dropdown-item" href="">
                            {n}
                            <hr />
                          </a>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i class="bi bi-plus-lg text-dark me-2"></i> New Addition
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <li>
                      <a className="dropdown-item" href="#">
                        Update Soon
                        <hr />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* side navbar finish */}

      {/* dropdown with navbar start */}
      <div className="navbar navbar-expand-lg bg-dark-subtle p-0 dropDownHide">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="">
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
                    <a className="dropdown-item" href="/home/Popular">
                      Popular
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/home/Letest">
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
                  <li onClick={() => navigate(`/home`)}>
                    <a className="dropdown-item" href="">
                      All
                    </a>
                  </li>
                  {categoryData.map((n) => (
                    <>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li onClick={() => navigate(`/home/${n}`)}>
                        <a className="dropdown-item" href="">
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
      {/* dropdown with navbar Finish */}
    </>
  );
}

export default UserNavbar;
