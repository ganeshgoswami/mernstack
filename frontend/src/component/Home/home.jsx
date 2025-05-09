import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../Home/home.css";

const Home = () => {
  const {
    alldata,
    getalldata,
    handleViewsCount,
    categorys,
    totalPages,
    currentPage,
    createSlug,
    searchData,
    inputValue,
    setCurrentPage,
    seprateCategory,
  } = useContext(AdminContext);

  const [visibleBadges, setVisibleBadges] = useState(8);
  const navigate = useNavigate();
  useEffect(() => {
    getalldata(currentPage);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleShowMore = () => {
    setVisibleBadges((prev) => Math.min(prev + 8, categorys.length));
  };

  // 1,2,3,4 show page
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 4;
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(endPage - maxPageButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      inputValue ? searchData(inputValue, newPage) : getalldata(newPage);
      if (newPage) navigate(`?page=${newPage}`);
    }

    if (inputValue) navigate(`?Search=${inputValue}`);
  };

  const handleCategoryClick = (category) => {
    setCurrentPage(1);
    seprateCategory(category, 1);
  };

  return (
    <>
      <Helmet>
        <title>sex videos - xxx or free porn videos - XBadWap </title>
        <meta
          name="description"
          content="Enjoy the best free sex videos in high definition. Stream and download the hottest adult content featuring top stars and amateur performers. Updated daily with fresh, high-quality videos!"
        />
        <link rel="canonical" href="" />
        <meta name="keywords" content="xxxhd" />
      </Helmet>

      <div className="container-fluid my-2" style={{ width: "96%" }}>
        <div className="d-flex m-1 d-flex flex-wrap">
          <h5 className="text-white">Related: </h5>
          {categorys.slice(0, visibleBadges).map((category, index) => (
            <Link
              to={`/${createSlug(category)}`}
              className="text-decoration-none"
              key={index}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="badge text-bg-secondary d-flex align-items-center m-1">
                {category}
              </span>
            </Link>
          ))}

          <div className="d-flex align-items-center m-1">
            {visibleBadges < categorys.length && (
              <button className="btn text-info" onClick={handleShowMore}>
                ... Show More
              </button>
            )}
          </div>
        </div>
        <div className="row justify-content-center m-1 g-2">
          {alldata.length > 0 ? (
            alldata.map((vd, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
                key={index}
              >
                <Link
                  to={`/viewplayvideo/${vd._id}`}
                  style={{ width: "90%", textDecoration: "none" }}
                  onClick={() => {
                    handleViewsCount(vd._id);
                    handleScrollToTop();
                  }}
                >
                  <div className="card shadow-sm bg-body-tertiary rounded position-relative object-fit-none border-dark">
                    <img
                      loading="lazy"
                      src={vd.ImgUrl}
                      alt={vd.Titel}
                      className="rounded w-100 imageSize"
                    />
                    <span className="views-overonImg">
                      <i class="bi bi-eye"></i> {vd.Views}
                    </span>
                    <span className="time-overlay">
                      {vd.Duration || "00:00"}
                    </span>
                  </div>
                  {index == 0 ? (
                    <h1 className="text-decoration-none text-center text-white mt-2 item-title">
                      {vd.Titel}
                    </h1>
                  ) : (
                    <h2 className="text-decoration-none text-center text-white mt-2 item-title">
                      {vd.Titel}
                    </h2>
                  )}
                </Link>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>

        {/* next and  Previous buttons*/}

        <div className="pagination-controls mt-4">
          <button
            className="btn text-white button-size "
            style={{ backgroundColor: "#87341a" }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {generatePageNumbers().map((page) => (
            <button
              key={page}
              className={`btn mx-1 ${
                page === currentPage ? "btn-danger" : "btn-light"
              } midel-btn-size`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}

          <button
            className="btn text-white button-size "
            style={{ backgroundColor: "#87341a" }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
