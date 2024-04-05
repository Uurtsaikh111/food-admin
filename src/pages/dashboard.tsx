import { Container, InputBase, Stack, Typography, alpha, styled } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
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
 const Home =()=>{
    return(
        <Stack bgcolor={"#F7F7F8"}>
           <Container maxWidth={"lg"}>
               <Stack marginTop={"27px"}>
                 <Stack marginBottom={4}>
                    <Stack px={3} py={"20px"} justifyContent={"space-between"} direction={"row"} alignItems={"center"} bgcolor={"white"} border={"1px solid #ECEDF0"} >
                        <Typography fontSize={"20px"} fontWeight={700}>Admin dashboard</Typography>
                        <Search sx={{  backgroundColor:"#F7F7F8", border:"1px solid #ECEDF0"}}>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                         placeholder="Search"
                         inputProps={{ "aria-label": "search" }}
                         />
                       </Search>
                    </Stack>
                   
                 </Stack>
                 <Stack></Stack>
               </Stack>
           </Container>
        </Stack>
    )
}

export default Home