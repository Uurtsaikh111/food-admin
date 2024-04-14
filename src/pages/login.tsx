import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
const LoginComponent = () => {
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status && password) {
    }
    const data = {
      status: status,
      password: password,
    };
    console.log(data);
    const res = await fetch("http://localhost:4000/api/loginAdmin", {
      body: JSON.stringify(data),
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    console.log(datas);
    if (datas.token) {
      localStorage.setItem("userToken", datas.token);
      router.push("/");
    } else {
      alert("something wrong");
    }
  };
  return (
    <Stack>
      <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Stack
            width={"448px"}
            borderRadius={2}
            gap={6}
            padding={4}
            margin={"auto"}
          >
            <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>
              Нэвтрэх
            </Typography>
            <Stack gap={1}>
              <Stack gap={2}>
                <Stack gap={0.5}>
                  <Typography>Админ нэр </Typography>
                  <TextField
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    type="status"
                    id="outlined-basic"
                    placeholder="Админ нэрээ оруулна уу"
                    variant="outlined"
                    sx={{ backgroundColor: "#ECEDF0" }}
                  />
                </Stack>
                <Stack>
                  <Typography>Нууц үг</Typography>

                  <FormControl
                    sx={{ m: 0, width: "100%", backgroundColor: "#ECEDF0" }}
                    variant="outlined"
                  >
                    <OutlinedInput
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type={showPassword ? "password" : "text"}
                      endAdornment={
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      }
                      placeholder="Password"
                    />
                  </FormControl>
                </Stack>
              </Stack>
              <Link href={"forgot-pass"} style={{ textDecoration: "none" }}>
                <Typography textAlign={"end"} color={"#000000"}>
                  Нууц үг сэргээх
                </Typography>
              </Link>
            </Stack>
            <Stack gap={4}>
              <Button
                type="submit"
                sx={{
                  px: "16px",
                  py: "8px",
                  borderRadius: "8px",
                  backgroundColor: "#18BA51",
                  color: "white",
                  fontSize: "16px",
                  border: "1px solid #18BA51",
                }}
              >
                Нэвтрэх
              </Button>
              <Typography textAlign={"center"}>Эсвэл</Typography>
              <Link href={"signup"}>
                <Button
                  fullWidth
                  sx={{
                    color: "black",
                    border: "1px solid #18BA51",
                    fontSize: "16px",
                  }}
                >
                  Бүртгүүлэх
                </Button>
              </Link>
            </Stack>
          </Stack>
        </form>
      </React.Fragment>
    </Stack>
  );
};

export default LoginComponent;
