import React, { useContext, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { useNavigate } from "react-router-dom";
import "../AddCollection/addCollection.css";

const AddCollection = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [titel, setTitel] = useState("");
  const [category, setCategory] = useState("");
  const [videourl, setVideourl] = useState("");
  const dropdow = [
    "India",
    "USA",
    "South Africa",
    "Afghanistan",
    "Taiwan",
    "Antarctica",
    "Cuba",
    "Iceland",
    "Jamaica",
    "Japan",
    "Tajikistan",
    "Sri Lanka",
    "Russia",
    "Poland",
    "Pakistan"
  ];
  const navigate = useNavigate();
  
  const { addVdata } = useContext(AdminContext);


  function handleSubmit(e) {
    e.preventDefault();

    const productData = { imgUrl, titel, category, videourl };
    console.log(productData);
    navigate("/collection");
    addVdata(productData);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center AddCollection-page">
        <div className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          <h2 className="text-center">Add Collection</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group mb-3">
              <label>Img Url</label>
              <input
                type="text"
                name="imgUrl"
                className="form-control"
                placeholder="Enter Image Url"
                value={imgUrl}
                onChange={(e) => {
                  setImgUrl(e.target.value);
                }}
              />
            </div>

            <div className="form-group mb-3">
              <label>Titel</label>
              <input
                type="text"
                name="titel"
                className="form-control"
                placeholder="Enter Titel"
                value={titel}
                onChange={(e) => {
                  setTitel(e.target.value);
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                name="category"
                id=""
                value={category}
                className="form-control"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Choose Category</option>
                {dropdow.map((vl) => (
                  <option value={vl}>{vl}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Video Url</label>
              <input
                type="text"
                name="videourl"
                className="form-control"
                placeholder="Enter Video Url"
                value={videourl}
                onChange={(e) => {
                  setVideourl(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Add New Collection
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCollection;