import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";
import { Helmet } from "react-helmet";

const SaprateCategory = () => {
  const {getalldata, handleViewsCount,currentPage,seprateCategory ,filterCategoryData,createSlug} = useContext(AdminContext); 
  const { category } = useParams();

  useEffect(()=>{
    getalldata()
    seprateCategory(category,currentPage)
  },[])

  return (
    <>
      <Helmet>
        <title>Blue Sexy Picture : 💋💋{category} xxx</title>
        <meta
          name="description"
          content="blue sexy pictures that blend elegance and allure. blue sex picture is provieded fabulous sex video and good quality fucking video."
        />
        <link rel="canonical" href={`${category}`}/>
         <meta name="keywords" content="Blue Sexy Picture, guide, mastering Blue Sexy Picture, tips, strategies" />
      </Helmet>
      <div className="container-fluid my-2" style={{ width: "96%" }}>
        <div className="row justify-content-center m-1 g-2">
          {filterCategoryData.length > 0 ? (
            filterCategoryData.map((vd, index) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
                key={index}
              >
                <Link
                  to={`/playvideo/${vd._id}`}
                  style={{ width: "90%", textDecoration: "none" }}
                  onClick={() => handleViewsCount(vd._id)}
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

export default SaprateCategory;
