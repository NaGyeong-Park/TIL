import React, { useState, useEffect } from "react";
import { login } from "../../utils/api";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

function LoginForm() {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const checkData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    const emailCheck =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!checkData.email) {
      setEmailError("이메일을 입력해주세요");
    } else if (!emailCheck.test(checkData.email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
    } else {
      setEmailError("");
    }

    const passwordCheck =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!checkData.password) {
      setPasswordError("비밀번호를 입력해주세요");
    } else if (!passwordCheck.test(checkData.password)) {
      setPasswordError("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    } else {
      setPasswordError("");
    }
    if (
      emailCheck.test(checkData.email) &&
      passwordCheck.test(checkData.password)
    ) {
      console.log("로그인 가능");
      login(checkData.email, checkData.password);
      window.location.href = "/";
    }
  };

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={onSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email 주소"
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
            autoComplete="current-password"
            helperText={passwordError}
            error={passwordError !== "" || false}
          />
          <br />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              비밀번호를 잊으셨나요?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"회원가입"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default LoginForm;
