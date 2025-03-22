import React from "react";
import { Link } from "react-router-dom";

const Backlinks = () => {
  let backlinks = [
    {
      webName: "ThePornJunction.com",
      content: "The Porn Junction - The World's Best Porn Sites List!",
      url: "https://thepornjunction.com",
      img:""
    },
    {
      webName: "best10pornweb.com",
      content: "Letest 10 supar best pay porn sites",
      url: "http://best10pornweb.com",
      img:""
    },
    {
      webName: "Lindylist.org",
      content: "Top Porn Sites List!",
      url: "https://www.lindylist.org",
      img:""
    },
    {
      webName: "pornaroma.com",
      content: "Best Adult Directory",
      url: "https://pornaroma.com/",
      img:"https://pornaroma.com/banner/Pornaroma-468.gif"
    },
    {
      webName: "ThePornJunction.com",
      content: "The Porn Junction - The World's Best Porn Sites List!",
      url: "https://thepornjunction.com",
      img:""
    },
  ];

  return (
    <>
     <div className="container my-2">
  <div className="row justify-content-center m-1 g-4 d-flex flex-wrap">
       <h1 className="text-white"> Best Porn Websites</h1>
    {backlinks.map((da, index) => (
      <Link
        key={index}
        to={da.url}
        target="_blank"
        className="col-12 col-sm-6 col-md-4 col-lg-3 text-decoration-none "
      >
        <div className="card text-black shadow p-3 bg-secondary-subtle">
          <img src={da.img} alt={da.content} />
          <h5>{da.webName}</h5>
          <p>{da.content}</p>
          <a href={da.url} title={da.content} target="_blank”>" >{da.webName}</a>
        </div>
      </Link>
    ))}
  </div>
</div>

    </>
  );
};

export default Backlinks;
