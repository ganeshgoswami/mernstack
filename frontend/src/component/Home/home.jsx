import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link } from "react-router-dom";
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
    inputValue
  } = useContext(AdminContext);
  const [visibleBadges, setVisibleBadges] = useState(8);

  console.log(alldata)
  console.log(currentPage)

  useEffect(()=>{
    getalldata(currentPage)
  },[])


  const handleShowMore = () => {
    setVisibleBadges((prev) => Math.min(prev + 8, categorys.length));
  };




  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      inputValue ? searchData(inputValue,newPage) : getalldata(newPage);
    }
  };


  return (
    <>
      <Helmet>
        <title>BF XX - 18+ Sex Video</title>
        <meta
          name="description"
          content="bf xx Ultimate Guide for sex. bf Xx is tell us how to do sex and know about sex. this search xxx , sex ,blue film, bf xx etc. sex relex your mind."
        />
         <meta name="keywords" content="BF XX, guide, mastering BF XX, tips, strategies" />
      </Helmet>

      <div className="container-fluid my-2" style={{ width: "96%" }}>
        <div className="d-flex m-1 d-flex flex-wrap">
          <h5 className="text-white">Related: </h5>
          {categorys.slice(0, visibleBadges).map((category, index) => (
            <Link
              to={`/home/${createSlug(category)}`}
              className="text-decoration-none"
              key={index}
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
                  to={`/playVideo/${vd._id}/${createSlug(vd.Category)}`}
                  style={{ width: "90%", textDecoration: "none" }}
                  onClick={() => handleViewsCount(vd._id)}
                >
                  <div className="card shadow-sm bg-body-tertiary rounded position-relative object-fit-none border-dark">
                    <img
                      src={vd.ImgUrl}
                      alt={vd.Titel}
                      className="rounded w-100"
                      style={{ height: "120px", objectFit: "cover" }}
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

        {/* Pagination */}

        <div className="pagination-controls mt-4">
          <button
            className="btn text-white"
            style={{ backgroundColor: "#87341a" }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn text-white"
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
