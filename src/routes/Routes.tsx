import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageTemplate from "../components/templates/MainPageTemplate";
import Stock from "../pages/Stock";
import Home from "../pages/Home";
import Login from "../pages/Login";
import History from "../pages/History";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/sistema-abefra">
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route
          path="/"
          element={
            <MainPageTemplate pageName="ABEFRA">
              <Home />
            </MainPageTemplate>
          }
        />
        <Route
          path="/stock"
          element={
            <MainPageTemplate pageName="Estoque">
              <Stock />
            </MainPageTemplate>
          }
        />
        <Route
          path="/history"
          element={
            <MainPageTemplate pageName="Histórico">
              <History />
            </MainPageTemplate>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
