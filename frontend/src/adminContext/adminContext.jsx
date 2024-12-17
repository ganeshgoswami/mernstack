import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AuthAdminProvider = ({ children }) => {
  const [alldata, setalldata] = useState([]);
  const [admin, setAdmin] = useState(null);
    const [searchCountry, setSearchCountry] = useState(null);
    
  useEffect(() => {
    getalldata();
    setAdmin(localStorage.getItem("adminlogin"))
  }, []);


  const getalldata = async () => {
    await fetch("http://localhost:5000/alldata")
      .then((res) => res.json())
      .then((data) => {
        setalldata(data.data);
      });
  };

  const addVdata = async (vdata) => {
    await fetch("http://localhost:5000/addCollection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data._id != null) {
          console.log("Data Add Succcessfully");
        } else {
          console.log("Same Data not Add Same Database");
        }
      });
  };

  const deletedata = async (id) => {
    await fetch(`http://localhost:5000/deleteVideo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (id) {
          getalldata();
        }
        console.log("Delete response:", data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  const edit = async (id, formData) => {
    await fetch(`http://localhost:5000/editData/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        getalldata();
      });
  };

  const handleViewsCount = async (videoId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/viewsUpdate/${videoId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ videoId }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update Views: ${response.statusText}`);
      }
      const data = await response.json();
      getalldata()
      console.log("Views Updated successfully:", data);
    } catch (err) {
      console.error("Error Updating views:", err);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        addVdata,
        alldata,
        deletedata,
        edit,
        admin,
        setAdmin,
        getalldata,
        handleViewsCount,
        searchCountry,
        setSearchCountry
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
