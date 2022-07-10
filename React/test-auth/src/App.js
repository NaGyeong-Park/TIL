import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/main/Header/Header";
import Login from "./pages/login/Login";
import Signup from "./routes/account/Signup";
import MeetingList from "./routes/meetingList/MeetingList";
import MeetingRoom from "./routes/meetingRoom/MeetingRoom";
import { setHeaders } from "./utils/api";
import Loader from "react-loading";
import Index from "./components/Home/Index";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      await axios({
        method: "get",
        url: "http://localhost:8090/me",
        headers: setHeaders(),
      })
        .then((res) => {
          localStorage.setItem("user_name", res.data.user_name);
        })
        .catch((err) => console.log(err.request.data));
      setLoading(false);
    };
    fetchUserInfo();
  }, []);

  if (loading)
    return (
      <div>
        <Loader
          type={"bubbles"}
          color={"#666633"}
          message={"잠시만 기다려주세요"}
        />
      </div>
    );

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/meetinglist" element={<MeetingList />}></Route>
          <Route path="/meetingroom" element={<MeetingRoom />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
