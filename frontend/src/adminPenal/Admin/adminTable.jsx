import React, { useContext, useState } from "react";
import { AdminContext } from "../../adminContext/adminContext";
import "../AdminLogin/login.css";
import { useNavigate } from "react-router-dom";
const AdminTable = () => {
  const { alldata, deletedata, edit,
    getalldata,
    totalPages,
    currentPage, } = useContext(AdminContext);
  const [deleteVideoName, setDeleteVideoName] = useState(null);
  const [updatedData, setUpdatedData] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [titel, setTitel] = useState("");
  const [category, setCategory] = useState("");
  const [videourl, setVideourl] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [models, setModels] = useState("");
  const [alt, setAlt] = useState("");

  
  const itemsPerPage = 25;
  const categoryData = [];
const navigate =useNavigate()
const pStar = ["Emily Willis","Dillion Harper","Abella Danger","Dani Daniels","Angelica Heaven","Alecia Fox","Hailey Rose","Kathryn Mae","Mia Khalifa","Nicole Aniston","Juniper Ren","Valentina Nappi","Amarna Miller","Karla Kush","Samantha Sin","Freya Dee","Janice Griffith","Adriana Chechik","Sonya blaze","Alys star","Angela White","Cory Chase","Elsa Jean","Other"]


  alldata.map((n) =>
    categoryData.indexOf(n.Category) === -1 ? categoryData.push(n.Category) : "" 
  );

  const searchIdForDelete = (id) => {
    const search = alldata.find((n) => n._id === id);
    setDeleteVideoName(search);
  };

  const deleteVideo = (id) => {
    deletedata(id);
  };

  const handelUpdateVideo = (id, e) => {
    e.preventDefault();
    const formData = { imgUrl, titel, category, videourl ,description,duration,models,alt};
    edit(id, formData);
  };

  const searchData = (id) => {
    const updateNewData = alldata.find((n) => n._id === id);
    setUpdatedData(updateNewData);
    setImgUrl(updateNewData.ImgUrl);
    setTitel(updateNewData.Titel);
    setCategory(updateNewData.Category);
    setVideourl(updateNewData.Videourl);
    setDescription(updateNewData.Description);
    setDuration(updateNewData.Duration);
    setModels(updateNewData.Models);
    setAlt(updateNewData.Alt);
  };


  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      getalldata(newPage)
      if(newPage) navigate(`?page=${newPage}`)
    }
  };

  return (
    <div className="container mt-4">
      {alldata && alldata.length > 0 ? (
        <div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {alldata.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.Category}</td>
                    <td>
                      <img
                      loading="lazy"
                        src={item.ImgUrl}
                        alt={item.Titel}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td>
                      <div className="d-flex flex-wrap">
                        <button
                          type="button"
                          className="btn btn-success m-1"
                          data-bs-toggle="modal"
                          data-bs-target="#editData"
                          onClick={() => searchData(item._id)}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger m-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => searchIdForDelete(item._id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* pagination button click */}
          <div className="pagination-controls mt-4">
          <button
            className="btn text-white"
            style={{ backgroundColor: "#87341a" }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2 text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn text-white"
            style={{ backgroundColor: "#87341a" }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        </div>
      ) : (
        <p>No data available.</p>
      )}

      {/* delete Modal to Delete data */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Delete
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h4>Are You Sure , Delete This Video</h4>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => deleteVideo(deleteVideoName._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit data With Modal  */}

      <div
        className="modal fade"
        id="editData"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
              <div className="mb-3">
                  <label>Model Name</label>
                  <select
                    name="models"
                    id=""
                    value={models}
                    className="form-control"
                    onChange={(e) => {
                      setModels(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      Choose Category
                    </option>
                    {pStar.map((vl) => (
                      <option value={vl}>{vl}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Image Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={imgUrl}
                    onChange={(e) => {
                      setImgUrl(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Video Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={videourl}
                    onChange={(e) => {
                      setVideourl(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
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
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Titel
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={titel}
                    onChange={(e) => {
                      setTitel(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
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
                    <option value="" disabled>
                      Choose Category
                    </option>
                    {categoryData.map((vl) => (
                      <option value={vl}>{vl}</option>
                    ))}
                  </select>
                </div>
          
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                   Duration
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={duration}
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(e) => handelUpdateVideo(updatedData._id, e)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminTable;
