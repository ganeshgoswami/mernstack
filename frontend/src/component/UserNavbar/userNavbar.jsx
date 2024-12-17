// src/Navbar.js
import React, { useContext, useState } from "react";
import "../UserNavbar/userNavbar.css";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import logoImage from "../../assets/logoApp.png";
function UserNavbar() {
  const { alldata, setSearchCountry } = useContext(AdminContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const categoryData = [];
  alldata.map((n) =>
    categoryData.indexOf(n.Category) == -1 ? categoryData.push(n.Category) : ""
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCountry(inputValue);
  };

  const showAlldata = () => {
    setSearchCountry(null);
    setInputValue("");
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
            <i
              className="fa-solid fa-bars navbar-toggler text-white"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            ></i>
            <div className="ms-1 d-flex align-middle">
              <Link
                to="/"
                className="nav-link text-warning me-3 fw-bold"
                onClick={showAlldata}
              >
                <h3 className="text-danger">
                  <img
                    src={logoImage}
                    alt=""
                    width={"180px"}
                    className="logoImage"
                  />
                </h3>
              </Link>
            </div>
          </div>

          <div className="searchBarHide col-8">
            <form
              className="input-group"
              onSubmit={(e) => {
                handleSearch(e);
              }}
            >
              <input
                type="text"
                className="form-control p-3 border-0"
                placeholder={"Search " + alldata.length + " Videos ..."}
                aria-label="Search Videos"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <span className="input-group-text bg-white border-0">
                <i type="submit" className="bi bi-search"></i>
              </span>
            </form>
          </div>

          <div className="col-2 m-10"></div>
        </div>

        <form
          className="input-group downShowSearchBar m-2"
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder={"Search " + alldata.length + " Videos ..."}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <span className="input-group-text bg-white border-0">
            <i type="submit" className="bi bi-search"></i>
          </span>
        </form>
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
        style={{ backgroundColor: "#15131b" }}
      >
        <div className="offcanvas-header container">
          <div className="col-2">
            <i
              class="bi bi-x-lg text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>
          <div className="col-8 d-flex justify-content-center">
            <div
              className="ms-1"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <Link
                className="nav-link text-warning me-3 fw-bold"
                to="/home"
                onClick={showAlldata}
              >
                <h3 className="text-danger m-2">
                  <img src={logoImage} alt="" width={"160px"} />
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
                    <li
                      className="dropdown-item "
                      aria-label="Close"
                      data-bs-dismiss="offcanvas"
                    >
                      <Link
                        className="text-decoration-none text-black"
                        to={"/home/Popular Video"}
                        onClick={showAlldata}
                      >
                        Popular Video
                      </Link>
                      <hr />
                    </li>
                    <li
                      className="dropdown-item "
                      aria-label="Close"
                      data-bs-dismiss="offcanvas"
                    >
                      <Link
                        className="text-decoration-none text-black"
                        to={"/home/Letest Video"}
                        onClick={showAlldata}
                      >
                        Letest Video
                      </Link>

                      <hr />
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        aria-label="Close"
                        data-bs-dismiss="offcanvas"
                        onClick={showAlldata}
                      >
                        Red Alert
                      </Link>

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
                      onClick={() => {
                        navigate(`/home`);
                        showAlldata();
                      }}
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      All
                    </li>
                    <hr />
                    {categoryData.map((n) => (
                      <>
                        <li
                          onClick={() => {
                            navigate(`/home/${n}`);
                            showAlldata();
                          }}
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
                    <Link
                      className="dropdown-item"
                      to={"/home/Popular Video"}
                      onClick={showAlldata}
                    >
                      Popular Video
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to={"/home/Letest Video"}
                      onClick={showAlldata}
                    >
                      Letest Video
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" onClick={showAlldata}>
                      Red Alert
                    </Link>
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
                  <li
                    onClick={() => {
                      navigate(`/home`);
                      showAlldata();
                    }}
                  >
                    <Link className="dropdown-item">All</Link>
                  </li>
                  {categoryData.map((n) => (
                    <>
                      <li key={n}>
                        <hr className="dropdown-divider" />
                      </li>
                      <li
                        onClick={() => {
                          navigate(`/home/${n}`);
                          showAlldata();
                        }}
                      >
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
