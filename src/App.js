import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainpage/MainPage";
import PostMapPage from "./pages/postmappage/PostMapPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import TermUser from "./pages/TermUser";
import MyPage from "./pages/mypage/MyPage";
import RegisterPage2 from "./pages/RegisterPage2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postMapPage" element={<PostMapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="RegisterPage/registerPage2" element={<RegisterPage2 />} />
        <Route path="/termUser" element={<TermUser />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
