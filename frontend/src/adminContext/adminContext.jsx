import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AuthAdminProvider = ({ children }) => {
  const [alldata, setAlldata] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [categorys,setCategorys] = useState([])
 const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [message, setMessage] = useState("");
  const [showResultData, setShowResultData] = useState([]);
  const [filterCategoryData, setFilterCategoryData] = useState([]);
  const [viewBigVideo,setViewBigVideo] = useState({})
   const [inputValue, setInputValue] = useState(""); 
  const itemsPerPage = 18;
    const [searchCountry, setSearchCountry] = useState(null);

  useEffect(() => {
    getalldata();
    allCategorys();
    setAdmin(localStorage.getItem("adminlogin"))
  }, []);

  // chang url with hyphan 
  const createSlug = (text) => {
    if(text){
      return text.replace(/\s+/g, "-");
    }
  };


  const getalldata = async (page) => {
    try { 
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiBaseUrl}/allData/?page=${page}`);
      const data = await response.json();
      if (response.ok) {
        setAlldata(data.data || []);
        setTotalPages(data.totalPages || 0);
        setCurrentPage(data.currentPage || 1);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching All Data:", err);
    }
  };

  const allCategorys = async () => {
    try { 
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${apiBaseUrl}/allCategorys`);
      const data = await response.json();
      if (response.ok) {
        setCategorys(data.data)
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching All Categorys:", err);
    }
  };
  
  const fetchOneCategory = async (id, page) => {
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const response = await fetch(`${apiBaseUrl}/findOneCategory/${id}?${page}`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
  
    
        const data = await response.json();

        if (response.ok) {
            setShowResultData(data.data || []);
            setCurrentPage(data.currentPage || 1);
            setTotalPages(data.totalPages || 1);
            setViewBigVideo(data.idBaseData || null);
            setMessage(data.message || "Category retrieved successfully.");
        } else {
            setShowResultData([]);
            setMessage(data.message || "Error fetching Category.");
        }
    } catch (error) {
        console.error("Error fetching category:", error);
        setShowResultData([]);
        setMessage("An error occurred while fetching Category.");
    } 
};

  
  
  
  const seprateCategory = async (category, page = 1) => {
    try {
        const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

        const response = await fetch(`${apiBaseUrl}/seprateCate?category=${category}&page=${page}`);
        const data = await response.json();

        if (response.ok) {
            setFilterCategoryData(data.data || []);
            setCurrentPage(data.currentPage || 1);  
            setTotalPages(data.totalPages || 1);
            setMessage(data.message || "Category retrieved successfully.");
        } else {
            setFilterCategoryData([]);
            setMessage(data.message || "Error fetching Separate Category.");
        }
    } catch (error) {
        console.error("Error fetching category:", error);
        setFilterCategoryData([]);
        setMessage("An error occurred while fetching Category.");
    }
};

  

  const addVdata = async (vdata) => {
    try{
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

      await fetch(`${apiBaseUrl}/addCollection`, {
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
    }catch (error) {
      setShowResultData([]);
      setMessage("An error occurred while fetching add Video.");
    }
  };

  const deletedata = async (id) => {
    try{
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      await fetch(`${apiBaseUrl}/deleteVideo/${id}`, {
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
    }catch (error) {
      setShowResultData([]);
      setMessage("An error occurred while fetching delete Video.");
    }
  };

  const edit = async (id, formData) => {
    try{
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      await fetch(`${apiBaseUrl}/editData/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          getalldata(currentPage);
        });
    }catch (error) {
      setShowResultData([]);
      setMessage("An error occurred while fetching Edit Video.");
    }
  };

  const handleViewsCount = async (videoId) => {
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(
        `${apiBaseUrl}/viewsUpdate/${videoId}`,
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

  const searchData = async (query,page) => {
    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(
        `${apiBaseUrl}/searchData?query=${query}&page=${page}`
      );
      const result = await response.json();
  
      if (response.ok) {
        setAlldata(result.data);
        setTotalPages(result.totalPages || 0);
        setCurrentPage(result.currentPage || 1);
      } else {
        console.error("Error fetching search results:", result.message);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const modelSearch = async (model, page = 1) => {
    if (!model) {
        setShowResultData([]);
        return;
    }

    try {
      const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
        const modelParam = typeof model === "object" ? JSON.stringify(model) : model;
        const response = await fetch(
            `${apiBaseUrl}/findOneModelStar?model=${encodeURIComponent(modelParam)}&page=${page}`
        );
        const data = await response.json();

        if (response.ok) {
            setShowResultData(data.data || []);
            setCurrentPage(data.currentPage || 1);
            setTotalPages(data.totalPages || 1);
            setViewBigVideo(data.idBaseData || null);
            setMessage(data.message || "Model retrieved successfully.");
        } else {
            setShowResultData([]);
            setMessage(data.message || "Error fetching Models.");
        }
    } catch (error) {
        setShowResultData([]);
        setMessage("An error occurred while fetching Models.");
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
        setSearchCountry,
        fetchOneCategory,
        viewBigVideo,
        showResultData,
        seprateCategory,
        filterCategoryData,
        categorys,
        currentPage,
        totalPages,
        itemsPerPage,
        createSlug,
        searchData,
        inputValue,
         setInputValue,
         modelSearch,
         setCurrentPage
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
