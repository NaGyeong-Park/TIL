import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import Signup from "./routes/account/Signup";
import Main from "./routes/Main/Main";
import { setHeaders } from "./utils/api";
import { useDispatch } from "react-redux";
import Loader from "react-loading";
import Index from "./components/Home/Index";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const fetchUserInfo = async () => {
  //     setLoading(true);
  //     await axios({
  //       method: "get",
  //       url: "http://localhost:8090/api/v1/users/me",
  //       headers: setHeaders(),
  //     })
  //       .then((res) => {
  //         dispatch(loadUser(res.data));
  //         dispatch(isLoad(true));
  //         localStorage.setItem("user_name", res.data.user_name);
  //       })
  //       .catch((err) => console.log(err.request.data));
  //     setLoading(false);
  //   };
  //   fetchUserInfo();
  // }, []);

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
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<Main isLogin={isLogin} />}></Route> :
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
