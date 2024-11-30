import logo from "./logo.svg";
import "./App.css";
import AddCollection from "./adminPenal/addCollection";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "./component/userNavbar";
import Collections from "./adminPenal/collections";
import Home from "./component/home";
import Footer from "./component/footer";
import SaprateCategory from "./component/separateCategory";
import NavbarAdmin from "./adminPenal/navbarAdmin";
import { useEffect, useState } from "react";
import LoginPage from "./pages/login";
import AdminTable from "./adminPenal/adminTable";
import ProtectedRoute from "./secure/protectRoute" // Import the ProtectedRoute

function App() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem("admin"));
    setAdmin(storedAdmin);
  }, []);

  return (
    <>
    <div className="App">
      {admin === "admin@gmail.com" ? <NavbarAdmin /> : <UserNavbar />}
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:cate" element={<SaprateCategory />} />

        {/* Admin-only USe */}
        <Route path="/login" element={<LoginPage />} />
        
        <Route
          path="/addCollecion"
          element={
            <ProtectedRoute admin={admin}>
              <AddCollection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collection"
          element={
            <ProtectedRoute admin={admin}>
              <Collections />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminTable"
          element={
            <ProtectedRoute admin={admin}>
              <AdminTable />
            </ProtectedRoute>
          }
        />
      </Routes>
      {admin === "admin@gmail.com" ? "" : <Footer />}
     
    </div>
    </>
  );
}

export default App;
