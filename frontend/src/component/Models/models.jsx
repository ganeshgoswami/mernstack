import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";

const PModels = () => {
  const {
    handleViewsCount,
    createSlug,
  } = useContext(AdminContext);

  const pStar = [
    {
      name: "Dillion Harper",
      pImage:
        "https://zazzybabes.com/girls/dillion-harper/dillion-harper-pornstar-4214.jpg",
    },
    {
      name: "Dani Daniels",
      pImage:
        "https://www.babepedia.com/galleries/Twisty-DaniDanielsStrippingSexyPinkLingerie/01.jpg",
    },
    {
      name: "Angelica Heaven",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyiFxgZOb3GsauAARoDbSUnB1oW7WQH7mhQ&s",
    },
    {
      name: "Alecia Fox",
      pImage: "https://www.babepedia.com/user-uploads/Alecia%20Fox8.jpg",
    },
    {
      name: "Hailey Rose",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcy44EqQ3N13ZYzRHIvjwUasL_uMbbDDzDQ&s",
    },
    {
      name: "Kathryn Mae",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZUJPB0DYG3m6WCq9WnLoohBng66mwccJwA&s",
    },
    {
      name: "Mia Khalifa",
      pImage: "https://imgs1cdn.adultempire.com/actors/665051h.jpg",
    },
    {
      name: "Nicole Aniston",
      pImage:
        "https://xxxbios.com/wp-content/uploads/2017/07/1-6-e1558025812617.jpg",
    },
    {
      name: "Juniper Ren",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0calPqKni2-IhSzS5IdnBlNP4I_0gTYuoHA&s",
    },
    {
      name: "Valentina Nappi",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZs8xrW7flGthGIvCgoAPIjRpo2cwO121Zyg&s",
    },
    {
      name: "Amarna Miller",
      pImage: "https://www.babepedia.com/pics/Amarna%20Miller4.jpg",
    },
    {
      name: "Karla Kush",
      pImage:
        "https://img2.badoink.com/content/casts/48123/karla-kush-48123.jpg?q=80&w=720",
    },
    {
      name: "Samantha Sin",
      pImage: "https://images.pornmaki.com/actress_img/model3941.jpg",
    },
    {
      name: "Freya Dee",
      pImage: "https://s1.milffox.com/p/1/19/33388/pic4.jpg",
    },
    {
      name: "Janice Griffith",
      pImage:
        "https://zazzybabes.com/girls/janice-griffith/janice-griffith-babe-77716.jpg",
    },
    {
      name: "Adriana Chechik",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbDXYnnx_ujvhqWW2t0f7hs6RdCrW8wopDqA&s",
    },
    {
      name: "Sonya blaze",
      pImage: "https://www.babepedia.com/user-uploads/Sonya%20Blaze12.jpg",
    },
    {
      name: "Alys star",
      pImage: "https://www.babepedia.com/pics/Alyx%20Star.jpg",
    },
    {
      name: "Angela White",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wHVuCUHYT8ddxrJW4hFYPnN2Si1jjDW8Tg&s",
    },
    {
      name: "Cory Chase",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1gjLbuAOEkp4M73yDl0G5xGzdVRtbrX2ug&s",
    },
    {
      name: "Elsa Jean",
      pImage: "https://s1.milffox.com/p/1/25/43940/pic1.jpg",
    },
  ];


  return (
    <div className="container-fluid my-2" style={{ width: "96%" }}>
      <div className="row justify-content-center m-1 g-2">
        {pStar.length > 0 ? (
          pStar.map((vd, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
              key={index}
            >
              <Link
                to={`/pornStar/${createSlug(vd.name)}`}
                style={{ width: "90%", textDecoration: "none" }}
                onClick={() => handleViewsCount(vd._id)}
              >
                <div className="card shadow-sm bg-body-tertiary rounded position-relative object-fit-none border-dark">
                  <img
                    src={vd.pImage}
                    alt={vd.name}
                    className="rounded w-100 object-fit-cover img-responsive"
                  />
                </div>
                <p className="text-white">{vd.name}</p>
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
  );
};

export default PModels;
