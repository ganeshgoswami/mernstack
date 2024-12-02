import React, { useContext, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link } from "react-router-dom";
// import "./AdminLogin/login.css";

const Home = () => {
  const categoryData = [];
  const { alldata } = useContext(AdminContext);
  
  alldata.map((n) =>
    categoryData.indexOf(n.Category) === -1 ? categoryData.push(n.Category) : ""
  );
  debugger

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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; 


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = alldata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(alldata.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
  
    <div className="container-fluid my-2">
      <div className="row justify-content-center g-3">
        {currentItems.length > 0 ? (
          currentItems.map((vd, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center"
              key={index}
            >
              <Link to={`/home/${vd.Category}`} className="w-100">
                <div className="card shadow-sm">
                  <img
                    src={vd.ImgUrl}
                    alt={vd.Title}
                    className="rounded w-100"
                    style={{ height: "140px", objectFit: "cover" }}
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

    {/* Pagination use with ICON  */}
    
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button
          className="btn btn-primary"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <i className="bi bi-arrow-left" style={{ fontSize: "24px" }}></i>
        </button>
        <span className="text-white m-3">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <i
            className="bi bi-arrow-right text-white"
            style={{ fontSize: "24px" }}
          ></i>
        </button>
      </div>
    </div>
   
  );
};

export default Home;
