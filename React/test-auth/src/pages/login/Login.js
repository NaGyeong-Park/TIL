import React, { useState, useEffect } from "react";
import { login } from "../../utils/api";

function LoginForm() {
  const [inputId, setInputId] = React.useState("");
  const [inputPwd, setInputPwd] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputId === "" || inputPwd === "") {
      return;
    }
    login(inputId, inputPwd);
  };
  const idChange = (e) => {
    setInputId(e.target.value);
  };
  const pwdChange = (e) => {
    setInputPwd(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Login</h1>
        <label>아이디 : </label>
        <input type="email" id="id" onChange={idChange} value={inputId} />
        <br />
        <label>비밀번호 : </label>
        <input type="password" id="pwd" onChange={pwdChange} value={inputPwd} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
export default LoginForm;
