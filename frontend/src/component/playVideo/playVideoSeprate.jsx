import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../playVideo/PlayVideoSeprate.css";
import { Helmet } from "react-helmet";

const PlayVideoSeprate = () => {
  const { handleViewsCount,currentPage,showResultData,fetchOneCategory ,viewBigVideo,createSlug} = useContext(AdminContext);
  const { id } = useParams();

  useEffect(() => {   
      fetchOneCategory(id, currentPage);
  }, [id, currentPage]);
  

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
   <>
     <Helmet>
        <title>{`HD Hole: ${viewBigVideo.Titel}`}</title>
        <meta
          name="description"
          content="hd hole is sex videos provider .it's give perfect and good quality sex or fucking videos.High Definition sex videos are available."
        />
          <link rel="canonical" href={`${viewBigVideo.Titel}`}/>
         <meta name="keywords" content="HD Hole, guide, mastering HD Hole, tips, strategies" />
      </Helmet>
    <div className="container-fluid my-4">
      {viewBigVideo ? (
        <>
          <Link
            to={viewBigVideo.Videourl}
            target="_blank"
            className="text-decoration-none"
          >
            <div className="image-container">
              <img
              loading="lazy"
                src={viewBigVideo.ImgUrl}
                alt={viewBigVideo.Titel}
                className="image"
              />
              <div className="play-icon">
                <i className="bi bi-play text-white"></i>
              </div>
              <span className="time-overlay">{viewBigVideo.Duration}</span>
            </div>
            <div className="m-3">
              <h1 className="text-white">{viewBigVideo.Titel}</h1>
              <p className="text-white">{viewBigVideo.Description}</p>
            </div>
            <hr className="text-white" />
            <hr className="text-white" />
            <hr className="text-white" />
          </Link>

          <div className="row justify-content-center g-3">
            <h2 className="text-white link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
              <u>Releted Videos</u>
            </h2>
            {showResultData.length > 0 ? (
              showResultData.map((vd, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center"
                  key={index}
                >
                  <Link
                    to={`/playvideo/${vd._id}`}
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
                      <span className="time-overlay">{vd.Duration}</span>
                    </div>
                    <h2 className="text-decoration-none text-center text-white mt-2 item-title">
                      {vd.Titel}
                    </h2>
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
    </div></>
  );
};

export default PlayVideoSeprate;
