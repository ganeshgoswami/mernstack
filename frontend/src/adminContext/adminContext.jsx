import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AdminContext = createContext();

export const AuthAdminProvider = ({ children }) => {
  const [alldata, setAlldata] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [categoryVideo , setCategoryVideo] = useState([])
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
    const apiUrl = process.env.REACT_APP_API_URL;
    
  // React Router Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Extract page number from URL
  const getPageFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get("page")) || 1;
  };
    
  useEffect(() => {
    const page = getPageFromUrl();
    setCurrentPage(page);
    getalldata(page);
    if (viewBigVideo && viewBigVideo.Category) {
      getreletedData(viewBigVideo.Category);
    }
    allCategorys();
    categorySection();
    setAdmin(localStorage.getItem("adminlogin"))
  }, [viewBigVideo,location]);

  // chang url with hyphan 
  const createSlug = (text) => {
    if(text){
      return text.replace(/\s+/g, "-");
    }
  };


  const getalldata = async (currentPage) => {
    try { 
      const response = await fetch(`${apiUrl}/allData?page=${currentPage}`);
      const data = await response.json();
      if (response.ok) {
        setAlldata(data.data || []);
        setTotalPages(data.totalPages || 0);
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Error fetching All Data:", err);
    }
  };

  const allCategorys = async () => {
    try { 
      const response = await fetch(`${apiUrl}/allCategorys`);
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
  

  const getbigVideo = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/bigvideofind/${id}`,{
          mode: "cors",
        }
      );
      const data = await response.json();

      if (response.ok) {
        setViewBigVideo(data.data || null);
        
        setMessage(data.message || "This Id Data retrieved successfully.");
      } else {
        setMessage(data.message || "Error fetching Category.");
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      setShowResultData([]);
      setMessage("An error occurred while fetching Category.");
    } 
};

const getreletedData = async (reletedCategoryData) => {
  try {
    const response = await fetch(
      `${apiUrl}/findrelatedData/${reletedCategoryData}`
    );
    const data = await response.json();

    if (response.ok) {
      setShowResultData(data.data || []);
      setTotalPages(data.totalPages || 1);
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
 
  
  const seprateCategory = async (category, currentPage) => {
    try {
      const response = await fetch(`${apiUrl}/seprateCate?category=${category}&page=${currentPage}`);
      const data = await response.json();
      if (response.ok) {
        setFilterCategoryData(data.data || []);
        setTotalPages(data.totalPages || 1);
        setMessage(data.message || "Category retrieved successfully.");
      } else {
        setShowResultData([]);
        setMessage(data.message || "Error fetching Saprate Category.");
      }
    } catch (error) {
        console.error("Error fetching category:", error);
        setFilterCategoryData([]);
        setMessage("An error occurred while fetching Category.");
    }
};

  
const addVdata = async (vdata, setItems) => {
  try {
    const response = await fetch(`${apiUrl}/addCollection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vdata),
    });

    const data = await response.json();

    if (data?.data?._id) {
      console.log("Data added successfully");

      // नया वीडियो लिस्ट के शुरुआत में जोड़ें
      if (setItems) {
        setItems((prevItems) => [data.data, ...prevItems]);
      }
    } else {
      console.log("Same data not added to the database");
    }
  } catch (err) {
    console.error("Error adding data:", err);
  }
};



  const deletedata = async (id) => {
    await fetch(`${apiUrl}/deleteVideo/${id}`, {
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
    await fetch(`${apiUrl}/editData/${id}`, {
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
  };

  const handleViewsCount = async (videoId) => {
    try {
      
      const response = await fetch(
        `${apiUrl}/viewsUpdate/${videoId}`,
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
    } catch (err) {
      console.error("Error Updating views:", err);
    }
  };

  const searchData = async (query,currentPage) => {
    try {
      const response = await fetch(
        `${apiUrl}/searchData?query=${query}&page=${currentPage}`
      );
      const result = await response.json();
  
      if (response.ok) {
        setAlldata(result.data);
        setTotalPages(result.totalPages || 0);
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
      
        const modelParam = typeof model === "object" ? JSON.stringify(model) : model;
        const response = await fetch(
            `${apiUrl}/findOneModelStar?model=${encodeURIComponent(modelParam)}&page=${page}`
        );
        const data = await response.json();

        if (response.ok) {
            setShowResultData(data.data || []);
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

const categorySection = async () =>{
  try { 
    const response = await fetch(`${apiUrl}/categorysection`);
    const data = await response.json();
    if (response.ok) {
      setCategoryVideo(data.data || []);
    } else {
      console.error(data.message);
    }
  } catch (err) {
    console.error("Error fetching All Data:", err);
  }
}


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
        categoryVideo, //saprate category Video
         setInputValue,
         modelSearch,
         setCurrentPage,
         getbigVideo,
         getreletedData
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

      