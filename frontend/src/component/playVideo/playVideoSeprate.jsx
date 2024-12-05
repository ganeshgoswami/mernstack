import React, { useContext } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../playVideo/PlayVideoSeprate.css";

const PlayVideoSeprate = ({ filtdata }) => {
  const { alldata } = useContext(AdminContext);
  const { id } = useParams();
  const findData = alldata.find((n) => n._id == id);

  console.log(filtdata);
  return (
    <>
      <div className="container my-4">
        {findData ? (
          <Link to={findData.Videourl} target="_blank">
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
              <h4 className="text-white">{findData.Titel}</h4>
              <p className="text-white">{findData.Description}</p>
            </div>
          </Link>
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
