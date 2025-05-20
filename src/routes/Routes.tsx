import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/sistema-abefra">
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
