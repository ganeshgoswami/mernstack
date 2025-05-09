import React, { useContext, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import { useNavigate } from "react-router-dom";

const AddCollection = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [titel, setTitel] = useState("");
  const [alt, setAlt] = useState("");
  const [models, setModels] = useState("");
  const [category, setCategory] = useState("");
  const [videourl, setVideourl] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const { alldata } = useContext(AdminContext);
  const [items, setItems] = useState([]);
  const dropdow = [
    "Pussy",
    "Love Sex",
    "Bisexual",
    "69",
    "Sister",
    "College",
    "Daddy",
    "Milfnut",
    "Hard Fuck",
    "Cowgirl",
    "Gang Fuck",
    "Mom",
    "Indian",
    "Teen",
    "Big buddy",
    "Russian",
    "Japanese",
    "Mia Khalifa",
    "Lesbian sex",
    "Threesome",
    "Crazy Porn",
    "Hd Porn",
    "Desi Sex",
    "Hot Mom",
    "Anal",
    "Asian",
    "Big Ass",
    "Amateur",
    "Popular Video",
    "Letest Video",
  ];
  const pStar = ["Riley Reid","Lana Rhoades","Mia Malkova","Eva Elfie","Johnny Sins","Violet Myers","Brandi Love" ,"bus","Emily Willis","Dillion Harper","Abella Danger","Dani Daniels","Angelica Heaven","Alecia Fox","Hailey Rose","Kathryn Mae","Mia Khalifa","Nicole Aniston","Juniper Ren","Valentina Nappi","Amarna Miller","Karla Kush","Samantha Sin","Freya Dee","Janice Griffith","Adriana Chechik","Sonya blaze","Alys star","Angela White","Cory Chase","Elsa Jean","Desi Bhabhi","Sister","Sexy Girl","Other","18+ Sex"]

  const { addVdata } = useContext(AdminContext);

  function handleSubmit(e) {
    e.preventDefault();
    const videoData = {
      imgUrl,
      titel,
      category,
      videourl,
      description,
      duration,
      models,
      alt
    };
    
    addVdata(videoData,setItems);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-3 mb-5 bg-body-tertiary rounded">
          {alldata.length}
          <h2 className="text-center">Add Collection</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="form-group mb-3">
              <label>Models Names</label>
              <select
                name="models"
                id=""
                value={models}
                className="form-control"
                onChange={(e) => {
                  setModels(e.target.value);
                }}
              >
                <option value="">Choose Models</option>
                {pStar.map((vl) => (
                  <option value={vl}>{vl}</option>
                ))}
              </select>
            </div>

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

            <div className="form-group mb-3">
              <label>Alt For Images</label>
              <input
                type="text"
                name="alt"
                className="form-control"
                placeholder="Enter Alt For Images"
                value={alt}
                onChange={(e) => {
                  setAlt(e.target.value);
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
              <label>Description</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div className="form-group mb-3">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                className="form-control"
                placeholder="Enter Duration"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
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
