import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";
import { Helmet } from "react-helmet";

const PModels = () => {
  const {
    createSlug,
  } = useContext(AdminContext);
  
  const pStar = [
    {
      name: "Dillion Harper",
      pImage:
        "https://www.yourdailygirls.com/galleries/digital-desire/digital-desire-dillion-harper-nude-in-bed/digital-desire-3.jpg",
    },
    {
      name: "Abella Danger",
      pImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfW0gg7uj4kEguJCm4FuPywNEbIvVbqmfinw&s",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROH0o38fl6m2sRfZi0D6qdSv3g93PHeCShnA&s",
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
        "https://media.lustgalleries.com/thumbs/5/8/6/d/b/586dbbd55ce51/1180x660/391.jpg",
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
    <>
     <Helmet>
        <title>Porn Stars - Free HD Videos - XBadWap</title>
        <meta
          name="description"
          content="Watch the hottest pornstars in action with our free collection of top-rated adult videos. Enjoy high-quality streaming of sexy performances from the most popular stars in the industry. New videos added daily!"
        />
        <link rel="canonical" href="/porn/pornstar"/>
         <meta name="keywords" content="por n star" />
      </Helmet>
    <div className="container-fluid my-2" style={{ width: "96%" }}>
      <div className="row justify-content-center m-1 g-2">
        {pStar.length > 0 ? (
          pStar.map((vd, index) => (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
              key={index}
            >
              <Link
                to={`/porn/pornstar/${createSlug(vd.name)}`}
                style={{ width: "90%", textDecoration: "none" }}
              >
                <div className="card shadow-sm bg-body-tertiary rounded position-relative object-fit-none border-dark">
                  <img
                  loading="lazy"
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
    </>
  );
};

export default PModels;
