import React from "react";
const onLogout = () => {
  localStorage.removeItem("JWT");
  localStorage.setItem("isLogin", "false");
  // 새로고침
  document.location.href = "/";
};

function Header() {
  return (
    <div>
      {localStorage.getItem("isLogin") ? (
        <button type="button" onClick={onLogout}>
          로그아웃
        </button>
      ) : (
        <div>
          <a href="/signup">회원가입</a>
          <a href="/login">로그인</a>
        </div>
      )}
    </div>
  );
}
export default Header;
