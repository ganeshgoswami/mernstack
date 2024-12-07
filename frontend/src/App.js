import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "./component/UserNavbar/userNavbar";
import Collections from "./adminPenal/Admin/collections";
import Home from "./component/Home/home";
import SaprateCategory from "./component/SeparateCategory/separateCategory";
import NavbarAdmin from "./adminPenal/AdminNavbar/navbarAdmin";
import { useContext, useEffect, useState } from "react";
import AdminTable from "./adminPenal/Admin/adminTable";
import ProtectedRoute from "./secure/protectRoute"; // Import the ProtectedRoute
import { AdminContext } from "./adminContext/adminContext";
import LoginPage from "./adminPenal/AdminLogin/login";
import Footer from "./component/Footer/footer";
import AddCollection from "./adminPenal/AddCollection/addCollection";
import PlayVideoSeprate from "./component/playVideo/playVideoSeprate";
import Help from "./HelpAndSupport/help";

function App() {
  const { admin } = useContext(AdminContext);
  console.log(admin);

  return (
    <>
      <div className="App">
        {admin ? <NavbarAdmin /> : <UserNavbar />}
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:cate" element={<SaprateCategory />} />
          <Route path="/playVideo/:id" element={<PlayVideoSeprate />} />
          <Route path="/help" element={<Help />} />

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
          {/* Admin-only USe */}
          <Route path="/admin/*" element={<LoginPage />} />
        </Routes>

        {!admin && <Footer />}
      </div>
    </>
  );
}

export default App;
