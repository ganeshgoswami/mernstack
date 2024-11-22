import React, { useContext } from "react";
import { AdminContext } from "../adminContext/adminContext";
import {Link} from "react-router-dom"

const Collections = () => {
  const { alldata } = useContext(AdminContext);

 

  return (
    <div className="container m-2">
      {/* Display filtered products */}
      <div className="row">
        {alldata.length > 0 ? (
          alldata.map((vd, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={vd._id}>
              <div className="card h-100 p-2 text-center shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div>
                  <div className="text-center">
                    <img
                      src={vd.ImgUrl}
                      alt={vd.title}
                      className="img-fluid"
                      style={{ maxWidth: "150px", maxHeight: "120px" }}
                    />
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      <span className="text-success">
                        <b>Title:</b> {vd.Titel}
                      </span>
                    </p>
                    <p>
                      <b>Category: </b>
                      {vd.Category}
                    </p>
                  </div>
                  <Link to={vd.Videourl}>{vd.Videourl}</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Collection found.</p>
        )}
      </div>
    </div>
  );
};

export default Collections;
