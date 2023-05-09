import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostMapPage from "./pages/PostMapPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import TermUser from "./pages/TermUser";
import MyPage from "./pages/MyPage";
import RegisterPage2 from "./pages/RegisterPage2";
import About from "./pages/About/About";
import NewPostPage from "./pages/NewPostPage";
import NewCommunityPostPage from "./pages/Community/newCommunityPostPage";
import PostInfoPage from "./pages/PostInfoPage";
import Community from "./pages/Community/PostMapPage";
import CommunityInfoPage from "./pages/Community/PostInfoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postMapPage" element={<PostMapPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newPostPage" element={<NewPostPage />} />
        <Route path="/updatePostPage/:id" element={<NewPostPage/>}/>
        <Route
          path="/newCommunityPostPage"
          element={<NewCommunityPostPage />}
        />
        <Route path="/registerPage" element={<RegisterPage />} />
        <Route path="RegisterPage/registerPage2" element={<RegisterPage2 />} />
        <Route path="/termUser" element={<TermUser />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/postInfoPage" element={<PostInfoPage />} />
        <Route
          path="/communityInfoPage/:communityId"
          element={<CommunityInfoPage />}
        />
=======
        <Route path="/postInfoPage/:id" element={<PostInfoPage />} />
>>>>>>> pjh
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
