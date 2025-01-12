import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { Link, useParams } from "react-router-dom";
import "../Home/home.css";

const SaprateCategory = () => {
  const { handleViewsCount,currentPage,seprateCategory ,filterCategoryData,createSlug} = useContext(AdminContext); 
  const { category } = useParams();

  useEffect(()=>{
    seprateCategory(category,currentPage)
  },[])

  return (
    <div className="container-fluid my-2" style={{ width: "96%" }}>

      <div className="row justify-content-center m-1 g-2">
               {filterCategoryData.length > 0 ? (
                 filterCategoryData.map((vd, index) => (
                   <div
                     className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex flex-column align-items-center p-0"
                     key={index}
                   >
                     <Link
                       to={`/playVideo/${vd._id}/${createSlug(vd.Category)}`}
                       style={{ width: "90%", textDecoration: "none" }}
                       onClick={() => handleViewsCount(vd._id)}
                     >
                       <div className="card shadow-sm bg-body-tertiary rounded position-relative object-fit-none border-dark">
                         <img
                           src={vd.ImgUrl}
                           alt={vd.Titel}
                           className="rounded w-100"
                           style={{ height: "120px", objectFit: "cover" }}
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
  );
};

export default SaprateCategory;
