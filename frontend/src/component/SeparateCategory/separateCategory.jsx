import React, { useContext } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css"

const SaprateCategory = () => {
  const { alldata } = useContext(AdminContext);
  const { cate } = useParams();
  
  const filtdata = alldata.filter(
    (n) => n.Category == cate
  );

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-start text-white mb-2">
      <h3 className="me-2">{cate}</h3>
      <h3 className="text-secondary"> {"("+ filtdata.length +")"} </h3> 
      </div>    
      
    <div className="row justify-content-center">
      {filtdata.length > 0 ? (
        filtdata.map((vd) => (
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

export default SaprateCategory;
