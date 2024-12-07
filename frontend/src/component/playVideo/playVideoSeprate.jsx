import React, { useContext } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../playVideo/PlayVideoSeprate.css";

const PlayVideoSeprate = ({ filtdata }) => {
  const { alldata } = useContext(AdminContext);
  const { id } = useParams();
  const findData = alldata.find((n) => n._id == id);

  console.log(alldata);
  return (
    <>
      <div className="container my-4">
        {findData ? (
          <>
          <Link to={findData.Videourl} target="_blank" className="text-decoration-none">
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
          </Link>


          
       <div className="row justify-content-center">
       {
        alldata.map((vd)=>(
          <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              key={vd._id}
            >
              <div className="position-relative">
                <Link to={`/playVideo/${vd._id}`} className="text-decoration-none">
                  <img
                    src={vd.ImgUrl}
                    alt={vd.Title} // Use the title or name property from your data
                    className="rounded w-100"
                    style={{ height: "130px", objectFit: "cover" }}
                  />
                <h1 className="text-white">{vd.Titel}</h1>
                </Link>
              </div>
            </div>
        ))
       }
       </div>
        
        </>
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
};

export default PlayVideoSeprate;
