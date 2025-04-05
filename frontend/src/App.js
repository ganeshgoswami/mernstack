import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserNavbar from "./component/UserNavbar/userNavbar";
import Collections from "./adminPenal/Admin/collections";
import Home from "./component/Home/home";
import SaprateCategory from "./component/SeparateCategory/separateCategory";
import NavbarAdmin from "./adminPenal/AdminNavbar/navbarAdmin";
import { useContext, useEffect, useState } from "react";
import AdminTable from "./adminPenal/Admin/adminTable";
import ProtectedRoute from "./secure/protectRoute"; 
import { AdminContext } from "./adminContext/adminContext";
import LoginPage from "./adminPenal/AdminLogin/login";
import Footer from "./component/Footer/footer";
import AddCollection from "./adminPenal/AddCollection/addCollection";
import PlayVideoSeprate from "./component/playVideo/playVideoSeprate";
import PModels from "./component/Models/models";
import ModelSeprate from "./component/Models/modelSeprate";
import CategorySection from "./allCategorys/categorySection";
import Backlinks from "./AddBacklink/backlink";
import NotFound from "./Pagenotfound/pagenotfound";

function App() {
  const { admin } = useContext(AdminContext);

  return (
    <>
      <div className="App">
        {admin ? <NavbarAdmin /> : <UserNavbar />}
        <Routes>
          {admin ? (
            <>
              <Route
                path="/admin/addvideos"
                element={
                  <ProtectedRoute admin={admin}>
                    <AddCollection />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/collectvideos"
                element={
                  <ProtectedRoute admin={admin}>
                    <Collections />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/tabledata"
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
              <Route path="/:category" element={<SaprateCategory />} />
              <Route path="/viewplayvideo/:id" element={<PlayVideoSeprate />} />
              <Route path="/porn/pornstar" element={<PModels />} />
              <Route path="/porn/pornstar/:model" element={<ModelSeprate />} />
              <Route path="/totalcategorys" element={<CategorySection />} />
              <Route path="/ournetwork" element={<Backlinks />} />
            </>
          )}

          {/* Admin-only USe */}
          <Route path="/admin" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!admin && <Footer />}
      </div>
    </>
  );
}

export default App;
