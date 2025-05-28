import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPageTemplate from "../components/templates/MainPageTemplate";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
