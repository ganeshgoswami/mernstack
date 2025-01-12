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
import PModels from "./component/Models/models";
import ModelSeprate from "./component/Models/modelSeprate";

function App() {
  const { admin } = useContext(AdminContext);
  console.log(admin);

  return (
    <>
      <div className="App">
        {admin ? <NavbarAdmin /> : <UserNavbar />}
        <Routes>
          {admin ? (
            <>
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
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/home/:category" element={<SaprateCategory />} />
              <Route path="/playVideo/:id/:category" element={<PlayVideoSeprate />} />
              <Route path="/pornStar" element={<PModels />} />
              <Route path="/pornStar/:model" element={<ModelSeprate />} />
            </>
          )}

          {/* Admin-only USe */}
          <Route path="/admin/*" element={<LoginPage />} />
        </Routes>

        {!admin && <Footer />}
      </div>
    </>
  );
}

export default App;
