import React, { useContext } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../playVideo/PlayVideoSeprate.css";

const PlayVideoSeprate = () => {
  const { alldata } = useContext(AdminContext);
  const { id,cate } = useParams();  
  const findData = alldata.find((n) => n._id == id);
  const filterData = alldata.filter((vd)=>vd.Category == cate)
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-fluid my-4">
      {findData ? (
        <>
          <Link
            to={findData.Videourl}
            target="_blank"
            className="text-decoration-none"
          >
            <div className="image-container">
              <img
                src={findData.ImgUrl}
                alt={findData.Titel}
                className="image"
              />
              <div className="play-icon">
                <i className="bi bi-play text-white"></i>
              </div>
              <span className="time-overlay">{findData.Duration}</span>
            </div>
            <div className="m-3">
              <h1 className="text-white">{findData.Titel}</h1>
              <p className="text-white">{findData.Description}</p>
            </div>
            <hr className="text-white" />
            <hr className="text-white" />
            <hr className="text-white" />
          </Link>


          <div className="row justify-content-center g-3" >
            <h2 className="text-white link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> <u>Releted Video</u> </h2>
            {filterData.length > 0 ? (
              filterData.map((vd, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center"
                  key={index}
                >
                  <Link
                    to={`/playVideo/${vd._id}`}
                    style={{ width: "90%", textDecoration: "none" }}
                  >
                    <div className="card shadow-sm position-relative">
                      <img
                        src={vd.ImgUrl}
                        alt={vd.Titel}
                        className="rounded w-100"
                        style={{ width:"320px" , height: "120px", objectFit: "cover" }}
                      />
                      <span className="time-overlay">{vd.Duration}</span>
                    </div>
                    <h4 className="text-decoration-none text-center text-white mt-2 item-title">
                      {vd.Titel}
                    </h4>
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
        </>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default PlayVideoSeprate;
