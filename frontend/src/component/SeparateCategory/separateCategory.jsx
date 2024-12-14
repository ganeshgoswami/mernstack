import React, { useContext } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";
import PlayVideoSeprate from "../playVideo/playVideoSeprate";

const SaprateCategory = () => {
  const { alldata,handleViewsCount } = useContext(AdminContext);
  
  const { cate } = useParams();
  const filtdata = alldata.filter((n) => n.Category == cate);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-start text-white mb-2">
        <h3 className="me-2">{cate}</h3>
        <h3 className="text-secondary"> {"(" + filtdata.length + ")"} </h3>
      </div>

      <div className="row justify-content-center">
        {filtdata.length > 0 ? (
          filtdata.map((vd) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={vd._id}
            >
              <div className="position-relative">
                <Link to={`/playVideo/${vd._id}/${vd.Category}`} className="text-decoration-none" onClick={()=>handleViewsCount(vd._id)}>
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
                      <span className="time-overlay">{vd.Duration}</span>
                    </div>
                <h4 className="text-white item-title">{vd.Titel}</h4>
                </Link>
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
