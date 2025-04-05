import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AdminContext } from "../adminContext/adminContext";

const CategorySection = () => {
  const {
    categoryVideo,
    createSlug,
    setSearchCountry,
    searchData,
    setInputValue,
    currentPage,
    seprateCategory,
  } = useContext(AdminContext);
  const navigate = useNavigate();

  const showAlldata = (cate, page) => {
    seprateCategory(cate, page);
    setSearchCountry(null);
    searchData("", currentPage);
    setInputValue("");
  };

  return (
    <>
      <Helmet>
        <title>x ham star : sexy(सेक्सी) video of allcategorys</title>
        <meta
          name="description"
          content="x ham star fucking videos available  .it's give perfect and good quality sex or fucking videos. High Definition sex videos are available."
        />
        <link rel="canonical" href="totalcategorys" />
        <meta
          name="keywords"
          content="HD Hole, guide, mastering HD Hole, tips, strategies"
        />
      </Helmet>
      <div className="container-fluid my-2" style={{ width: "96%" }}>
        <div className="row justify-content-center m-1 g-2">
          {categoryVideo.length > 0 ? (
            categoryVideo.map((n, index) => (
              <div className="col-md-3">
                <Link
                  to={`/${createSlug(n.Category)}`}
                  className="text-decoration-none"
                >
                  <div className="card shadow-sm bg-body-tertiary rounded object-fit-none border-dark">
                    <img
                      loading="lazy"
                      src={n.ImgUrl}
                      alt={n.Titel}
                      className="rounded w-100 categoryimagesize"
                    />
                  </div>
                  {index == 0 ? (
                    <h1 className="text-decoration-none text-center text-white mt-2 item-title">
                      {n.Category}
                    </h1>
                  ) : (
                    <h2 className="text-decoration-none text-center text-white mt-2 item-title">
                      {n.Category}
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

export default CategorySection;
