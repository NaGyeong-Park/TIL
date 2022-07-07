import axios from "axios";

const ACCESS_TOKEN = "accessToken";

const login = (id, pwd) => {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!emailRule.test(id)) {
    alert("이메일 형식의 아이디를 입력해주세요.");
  } else if (pwd === "") {
    alert("비밀번호를 입력해주세요.");
  } else {
    console.log("로그인");
    axios({
      method: "get", // port로 바꿀 예정 : 임시 서버 사용 중
      url: "http://localhost:8090/login",
      data: {
        email: id,
        password: pwd,
      },
    })
      .then((res) => {
        if (res.data.accessToken) {
          console.log("성공");
          setJwtToken(res.data.accessToken);
          localStorage.setItem("isLogin", true);
          // localStorage.setItem("token", res.data.accessToken);
        }
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};
export { login };

const setJwtToken = (jwtToken) => {
  localStorage.setItem("JWT", jwtToken, { sameSite: "strict" });
};

export const setHeaders = () => {
  const token = localStorage.getItem("token");
  const header = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  return header;
};
