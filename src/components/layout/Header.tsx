import * as React from "react";
import { styled, alpha} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {Container, Stack } from "@mui/material";
import { Basket, Logo, Profile } from "../Images";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "260px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const Header = () => {
  const [token, setToken] = React.useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken);

    if (!storedToken) {
      router.push("/login");
    }
  }, [router]);
  const handleLogout = () => {
    localStorage.removeItem("userToken"); 
    setToken(null); 
    router.push("/login"); 
  };
  return (
    <Container >
      <Stack
        maxWidth={"lg"}
        height={"57px"}
        sx={{
          
          py: "8px",
        }}
      >
        <AppBar
          position="static"
          sx={{ boxShadow: "none", backgroundColor: "white" }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "24px" }}>
              <Box>
                <Logo color={"black"} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "30px",
                  fontSize: "16px",
                  py: "8px",
                  color: "black",
                }}
              >
                <Link  href={"/"}
                  style={{ textDecoration: "none" }}
                ><Typography color={"#000000"} fontWeight={600}>Menu</Typography></Link>
                <Link  href={"/dashboard"}
                  style={{ textDecoration: "none" }}
                ><Typography color={"#000000"} fontWeight={600}>Dashboard</Typography></Link>
               
              </Box>
            </Box>
            <Box
              sx={{
                gap: "8px",
                display: "flex",
                color: "black",
              }}
            >
              <Search sx={{ border: 1 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Хайх"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  px: "16px",
                  py: "8px",
                }}
              >
                <Box>
                  <Basket />
                </Box>
                <Typography>Сагс</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  py: "8px",
                }}
              >
                <Box>
                  <Profile />
                </Box>

                {token == null ? (<Link
                  href={"login"}
                  style={{ textDecoration: "none" }}  
                >
                 <Typography color={"#000000"}>Нэвтрэх</Typography>
                </Link>) : (   <button onClick={handleLogout}
                style={{ padding: '4px 12px', backgroundColor: '#3f51b5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
              Гарах
            </button>)} 


              </Box>
            </Box>
          </Box>
        </AppBar>
      </Stack>
    </Container>
  );
};
export default Header;
