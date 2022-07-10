import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../../components/options/Loader";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function Signup() {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const checkData = {
      email: data.get("email"),
      password: data.get("password"),
      passwordCheck: data.get("passwordCheck"),
      name: data.get("name"),
    };

    const passwordC = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!checkData.password) {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (!passwordC.test(checkData.password)) {
      setPasswordError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    } else {
      setPasswordError("");
    }

    if (checkData.password !== checkData.passwordCheck) {
      setPasswordState("비밀번호가 동일하지 않습니다");
    } else {
      setPasswordState("");
    }

    const emailCheck =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!checkData.email) {
      setEmailError("이메일을 입력해주세요");
    } else if (!emailCheck.test(checkData.email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }

    if (!checkData.name) {
      setNameError("이름을 입력해주세요");
    } else if (checkData.name.length < 2) {
      setNameError("2자 이상 입력해주세요");
    } else {
      setNameError("");
    }

    if (
      emailCheck.test(checkData.email) &&
      passwordC.test(checkData.password) &&
      checkData.password === checkData.passwordCheck &&
      checkData.name.length > 1
    ) {
      console.log("회원가입 가능");
      setLoading(true);
      axios({
        method: "post",
        url: "http://localhost:8090/signup",
        data: {
          id: checkData.email,
          password: checkData.pwd,
          name: checkData.name,
        },
      })
        .then((res) => {
          console.log(res);
          setLoading(false);
          alert("회원가입이 완료되었습니다.");
          document.location.href = "/login";
        })
        .catch((err) => {
          setLoading(true);
          console.log(err.response.data.statusCode);
          if (err.response.data.statusCode === 409) {
            setEmailError("이메일이 중복되었습니다.");
          }
        });
    }
  };

  if (loading)
    return (
      <Loader type="spin" color="#ffffff" message={"회원가입 중입니다."} />
    );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <HandshakeIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            helperText={emailError}
            error={emailError !== "" || false}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="숫자+영문자+특수문자 8자리 이상"
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText={passwordError}
            error={passwordError !== "" || false}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            placeholder="위와 동일한 비밀번호를 입력해주세요"
            name="passwordCheck"
            label="Password Check"
            type="password"
            id="passwordCheck"
            helperText={passwordState}
            error={passwordState !== "" || false}
            autoComplete="off"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="이름"
            name="name"
            helperText={nameError}
            error={nameError !== "" || false}
          />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원가입
          </Button>
          <Link href="/Login" variant="body2">
            이미 계정이 있으신가요? 로그인 하기
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
export default Signup;
