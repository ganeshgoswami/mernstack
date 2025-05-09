import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";
import { Helmet } from "react-helmet";

const ModelSeprate = () => {
  const {
    handleViewsCount,
    currentPage,
    modelSearch,
    showResultData,
  } = useContext(AdminContext);

  const model = useParams().model;

  useEffect(() => {
    modelSearch(model, currentPage);
  }, [model, currentPage]);

  return (
    <>
      <Helmet>
        <title>{`${model} porn stars : HD Porn Videos - Xbadwap`}</title>
        <meta
          name="description"
          content="Watch the hottest porn stars in stunning HD quality. Enjoy free streaming of the best adult videos featuring your favorite stars. New high-definition content added daily for endless pleasure!"
        />
        <link rel="canonical" href={`${model}`} />
        <meta
          name="keywords"
          content="porn stars"
        />
      </Helmet>
      <div className="container-fluid my-2" style={{ width: "96%" }}>
        <div className="row justify-content-center m-1 g-2">
          {showResultData.length > 0 ? (
            showResultData.map((vd, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
                key={index}
              >
                <Link
                  to={`/viewplayvideo/${vd._id}`}
                  style={{ width: "90%", textDecoration: "none" }}
                  onClick={() => {
                    handleViewsCount(vd._id);
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
      </div>
    </>
  );
};

export default ModelSeprate;
