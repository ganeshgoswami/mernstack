import React, { useContext, useEffect, useState } from "react";
import "../UserNavbar/userNavbar.css";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import logoImage from "../../assets/logoApp.png";
function UserNavbar() {
  const { alldata,modelSearch,setCurrentPage, setSearchCountry,categorys,currentPage,seprateCategory,createSlug,searchData,inputValue, setInputValue} = useContext(AdminContext);
 
  const navigate = useNavigate();
  const pornStar = [
    {
      name: "Dillion Harper",
      pImage:
        "https://zazzybabes.com/girls/dillion-harper/dillion-harper-pornstar-4214.jpg",
    },
    {
      name: "Dani Daniels",
      pImage:
        "https://www.babepedia.com/galleries/Twisty-DaniDanielsStrippingSexyPinkLingerie/01.jpg",
    },
    {
      name: "Angelica Heaven",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyiFxgZOb3GsauAARoDbSUnB1oW7WQH7mhQ&s",
    },
    {
      name: "Alecia Fox",
      pImage: "https://www.babepedia.com/user-uploads/Alecia%20Fox8.jpg",
    },
    {
      name: "Hailey Rose",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcy44EqQ3N13ZYzRHIvjwUasL_uMbbDDzDQ&s",
    },
    {
      name: "Kathryn Mae",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZUJPB0DYG3m6WCq9WnLoohBng66mwccJwA&s",
    },
    {
      name: "Mia Khalifa",
      pImage: "https://imgs1cdn.adultempire.com/actors/665051h.jpg",
    },
    {
      name: "Nicole Aniston",
      pImage:
        "https://xxxbios.com/wp-content/uploads/2017/07/1-6-e1558025812617.jpg",
    },
    {
      name: "Juniper Ren",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0calPqKni2-IhSzS5IdnBlNP4I_0gTYuoHA&s",
    },
    {
      name: "Valentina Nappi",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs8xrW7flGthGIvCgoAPIjRpo2cwO121Zyg&s",
    },
    {
      name: "Amarna Miller",
      pImage: "https://www.babepedia.com/pics/Amarna%20Miller4.jpg",
    },
    {
      name: "Karla Kush",
      pImage:
        "https://img2.badoink.com/content/casts/48123/karla-kush-48123.jpg?q=80&w=720",
    },
    {
      name: "Samantha Sin",
      pImage: "https://images.pornmaki.com/actress_img/model3941.jpg",
    },
    {
      name: "Freya Dee",
      pImage: "https://s1.milffox.com/p/1/19/33388/pic4.jpg",
    },
    {
      name: "Janice Griffith",
      pImage:
        "https://zazzybabes.com/girls/janice-griffith/janice-griffith-babe-77716.jpg",
    },
    {
      name: "Adriana Chechik",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDXYnnx_ujvhqWW2t0f7hs6RdCrW8wopDqA&s",
    },
    {
      name: "Sonya blaze",
      pImage: "https://www.babepedia.com/user-uploads/Sonya%20Blaze12.jpg",
    },
    {
      name: "Alys star",
      pImage: "https://www.babepedia.com/pics/Alyx%20Star.jpg",
    },
    {
      name: "Angela White",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wHVuCUHYT8ddxrJW4hFYPnN2Si1jjDW8Tg&s",
    },
    {
      name: "Cory Chase",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1gjLbuAOEkp4M73yDl0G5xGzdVRtbrX2ug&s",
    },
    {
      name: "Elsa Jean",
      pImage: "https://s1.milffox.com/p/1/25/43940/pic1.jpg",
    },
  ];

  const model = useParams().model ;
  useEffect(()=>{
      modelSearch(model,currentPage)
  },[]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchData(inputValue,currentPage);
  };

  const showAlldata = (cate,page) => {
    seprateCategory(cate,page)
    setSearchCountry(null);
    searchData("",currentPage);
    setInputValue("");
  };

  const handleCategoryClick = (category) => {
    setCurrentPage(1);
    seprateCategory(category, 1);
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
                onClick={() => showAlldata()}
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
                className="form-control p-2 border-0"
                placeholder={"Search Videos ..."}
                aria-label="Search Videos"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <span className="input-group-text bg-white border-0">
                <i type="submit" className="bi bi-search"></i>
              </span>
            </form>
          </div>

          <div className="col-2 m-10" style={{ color: "rgb(35 39 48)" }}>
            Sex
          </div>
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
            placeholder={"Search  Videos ..."}
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
                onClick={() => showAlldata()}
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
                        to={`/home/${createSlug("Popular Video")}`}
                        onClick={() => {
                          showAlldata("Popular Video", currentPage);
                          handleCategoryClick("Popular Video");
                        }}
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
                        to={`/home/${createSlug("Letest Video")}`}
                        onClick={() => {
                          showAlldata("Letest Video", currentPage);
                          handleCategoryClick("Letest Video");
                        }}
                      >
                        Letest Video
                      </Link>

                      <hr />
                    </li>
                    <li onClick={() => navigate("/home")}>
                      <Link
                        className="dropdown-item"
                        aria-label="Close"
                        data-bs-dismiss="offcanvas"
                        to={"/home"}
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
                    {categorys.map((n) => (
                      <>
                        <li
                          onClick={() => {
                            navigate(`/home/${createSlug(n)}`);
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
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <i class="fa-solid fa-ribbon me-2"></i> Porn Stars
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul style={{ listStyle: "None" }}>
                    <hr />
                    {pornStar.map((n) => (
                      <>
                        <li
                          onClick={() => {
                            navigate(`/pornStar/${createSlug(n.name)}`);
                            modelSearch(n.name, 1)
                          }}
                          data-bs-dismiss="offcanvas"
                          aria-label="Close"
                          key={n.name}
                        >
                          {n.name}
                          <hr />
                        </li>
                      </>
                    ))}
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
                      to={`/home/${createSlug("Popular Video")}`}
                      onClick={() => showAlldata("Popular Video", currentPage)}
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
                      to={`/home/${createSlug("Letest Video")}`}
                      onClick={() => showAlldata("Letest Video", currentPage)}
                    >
                      Letest Video
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/home"}>
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
                  {categorys.map((n) => (
                    <>
                      <li key={n}>
                        <hr className="dropdown-divider" />
                      </li>
                      <li
                        onClick={() => {
                          navigate(`/home/${createSlug(n)}`);
                          showAlldata(n, currentPage);
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
                    <Link
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Update Soon
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="d-flex align-items-center ms-3">
                <p
                  className="text-black m-0"
                  onClick={() => {
                    navigate("/pornStar");
                    showAlldata();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Porn Star
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* dropdown with navbar Finish */}
    </>
  );
}

export default UserNavbar;
