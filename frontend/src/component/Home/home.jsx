import React, { useContext, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  const { alldata } = useContext(AdminContext);
  const categoryData = [];
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleBadges, setVisibleBadges] = useState(8);
  const initialLimit = 8;

  alldata.map((n) =>
    categoryData.indexOf(n.Category) === -1 ? categoryData.push(n.Category) : ""
  );

  // show releted video badge 

  alldata.forEach((item) => {
    if (!categoryData.includes(item.Category)) {
      categoryData.push(item.Category);
    }
  });

  const handleShowMore = () => {
    setVisibleBadges((prev) => Math.min(prev + 8, categoryData.length)); 
  };

  const handleShowLess = () => {
    setVisibleBadges(initialLimit); 
  };

  const firstVideoAndImage = [];
  if (categoryData.length > 0) {
    alldata.forEach((n) => {
      let index = firstVideoAndImage.findIndex(
        (q) => q.Category === n.Category
      );
      if (index === -1) {
        firstVideoAndImage.push(n);
      }
    });
  }

  // pagination use to next and Previous

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = alldata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(alldata.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="d-flex m-1 d-flex flex-wrap">
      <h5 className="text-white">Related: </h5>
        {categoryData.slice(0, visibleBadges).map((category, index) => (
          <Link to={`/home/${category}`} key={index}>
            <span className="badge text-bg-secondary d-flex align-items-center m-1">
              {category}
            </span>
          </Link>
        ))}

        <div className="d-flex align-items-center m-1">
          {visibleBadges < categoryData.length && (
            <button
              className="btn text-primary"
              onClick={handleShowMore}
            >
             ... Show More
            </button>
          )}
          {visibleBadges > initialLimit && (
            <button
              className="btn text-danger"
              onClick={handleShowLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      <div className="container-fluid my-2" style={{width:"90%"}}>
        <div className="row justify-content-center g-3">
          {currentData.length > 0 ? (
            currentData.map((vd, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center"
                key={index}
              >
                <Link to={`/home/${vd.Category}`} style={{width:"90%"}}>
                  <div className="card shadow-sm">
                    <img
                      src={vd.ImgUrl}
                      alt={vd.Title}
                      className="rounded w-100"
                      style={{ height: "120px", objectFit: "cover" }}
                    />
                  </div>
                </Link>
                <a
                  href="#"
                  className="text-decoration-none text-center text-white mt-2"
                >
                  {vd.Title || vd.Category}
                </a>
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

        <div className="d-flex justify-content-center flex-wrap mt-5">
          <button
            className="btn btn-light m-1 text-white"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            style={{backgroundColor:"#8e4026"}}
          >
            Previous
          </button>
          {Array.from({ length: Math.min(4, totalPages) }, (_, index) => {
            const startPage = Math.max(
              1,
              Math.min(currentPage - 1, totalPages - 3)
            );

            const pageNumber = startPage + index;
            return (
              pageNumber <= totalPages && (
                <button
                  key={pageNumber}
                  className={`btn ${
                    currentPage === pageNumber ? "btn-primary" : "btn-light"
                  } m-1`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            );
          })}
          <button
            className="btn btn-light m-1 text-white"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            style={{backgroundColor:"#8e4026"}}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
