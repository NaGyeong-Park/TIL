import React from "react";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const onLogout = () => {
  localStorage.removeItem("JWT");
  localStorage.removeItem("isLogin");
  // 새로고침
  document.location.href = "/";
};

function Header() {
  return (
    <Container component="main" maxWidth="xs">
      {localStorage.getItem("isLogin") ? (
        <Grid container>
          <Grid item xs>
            <Link href="/" variant="body2">
              홈
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="/meetinglist" variant="body2">
              방 목록
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="/meetingroom" variant="body2">
              지난 회의 이력
            </Link>
          </Grid>
          <Grid item>
            <Button type="button" onClick={onLogout}>
              로그아웃
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs>
            <Link href="/" variant="body2">
              홈
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="/signup" variant="body2">
              회원가입
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="/login" variant="body2">
              로그인
            </Link>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
export default Header;
