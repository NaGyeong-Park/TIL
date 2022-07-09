import axios from "axios";
import React, { useEffect, useState } from "react";
import Login from "./pages/login/Login";
import { setHeaders } from "./utils/api";
import { useDispatch } from "react-redux";
import { isLoad, loadUser } from "./redux/user";
import Loader from "react-loading";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserInfo = async () => {
      setLoading(true);
      await axios({
        method: "get",
        url: "http://localhost:8090/api/v1/users/me",
        headers: setHeaders(),
      })
        .then((res) => {
          dispatch(loadUser(res.data));
          dispatch(isLoad(true));
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
    <div>
      <h1>hi</h1>
      <Login />
    </div>
  );
}
export default App;
