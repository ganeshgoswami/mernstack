import React, { useContext } from "react";
import { AdminContext } from "../adminContext/adminContext";
import { Link } from "react-router-dom";
import "../css/login.css";

const Home = () => {
  const categoryData = [];
  const { alldata } = useContext(AdminContext);
  alldata.map((n) =>
    categoryData.indexOf(n.Category) === -1 ? categoryData.push(n.Category) : ""
  );

  const firstVideoAndImage = [];
  if (categoryData.length > 0) {
    alldata.forEach((n) => {
      let index = firstVideoAndImage.findIndex((q) => q.Category === n.Category);
      if (index === -1) {
        firstVideoAndImage.push(n);
      }
    });
  }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {alldata.length > 0 ? (
          firstVideoAndImage.map((vd) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={vd._id}>
              <div className="position-relative">
                <Link to={`/home/${vd.Category}`}>
                  <img
                    src={vd.ImgUrl}
                    alt={vd.Title} // Use the title or name property from your data
                    className="card-img-top img-fluid rounded"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Link>
                    <a className="text-decoration-none text-white">{vd.Title || vd.Category}</a>
              </div>
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
    </div>
  );
};

export default Home;
