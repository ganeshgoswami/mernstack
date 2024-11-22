import React, { useContext, useState } from "react";
import { AdminContext } from "../adminContext/adminContext";

const AdminTable = () => {
  const { alldata, deletedata, edit } = useContext(AdminContext);
  const [deleteVideoName, setDeleteVideoName] = useState(null);
  const [updatedData, setUpdatedData] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [titel, setTitel] = useState("");
  const [category, setCategory] = useState("");
  const [videourl, setVideourl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Items per page
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

  const searchIdForDelete = (id) => {
    const search = alldata.find((n) => n._id === id);
    setDeleteVideoName(search);
  };

  const deleteVideo = (id) => {
    deletedata(id);
  };

  const handelUpdateVideo = (id, e) => {
    e.preventDefault();
    const formData = { imgUrl, titel, category, videourl };
    edit(id, formData);
    console.log(id);
  };

  const searchData = (id) => {
    const updateNewData = alldata.find((n) => n._id === id);
    setUpdatedData(updateNewData);
    setImgUrl(updateNewData.ImgUrl);
    setTitel(updateNewData.Titel);
    setCategory(updateNewData.Category);
    setVideourl(updateNewData.Videourl);
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = alldata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(alldata.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
                {currentData.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.Category}</td>
                    <td>
                      <img
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

          {/* Pagination Controls */}
          <div className="d-flex justify-content-center flex-wrap mt-3">
            <button
              className="btn btn-light m-1"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`btn ${
                  currentPage === index + 1 ? "btn-primary" : "btn-light"
                } m-1`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="btn btn-light m-1"
              onClick={handleNextPage}
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

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Delete</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4>Are You Sure , Delete This Video</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>deleteVideo(deleteVideoName._id)}>Delete</button>
      </div>
    </div>
  </div>
</div>

{/* Edit data With Modal  */}

<div className="modal fade" id="editData" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Image Url</label>
            <input type="text" className="form-control" id="recipient-name"   value={imgUrl}
                onChange={(e) => {
                  setImgUrl(e.target.value);
                }}/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Titel</label>
            <input type="text" className="form-control" id="recipient-name"   value={titel}
                onChange={(e) => {
                  setTitel(e.target.value);
                }} />
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
               <option value="" disabled>Choose Category</option>
               {
                dropdow.map((vl)=>
                    <option value={vl}>{vl}</option>
                )
               }
               </select>
            </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Video Url</label>
            <input type="text" className="form-control" id="recipient-name" value={videourl}
                onChange={(e) => {
                    setVideourl(e.target.value);
                }}/>
          </div>
        
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e) => handelUpdateVideo(updatedData._id, e)}>Update</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AdminTable;


  
