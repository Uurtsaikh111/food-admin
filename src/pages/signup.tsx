import React, {useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import {  useRouter } from "next/router";
import { Button, FormControl, IconButton, OutlinedInput, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
 const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const router = useRouter();
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
      const data = {
        name:name,
        email:email,
        address:address,
        password:password, 
        status:status  
  }
       
       const res = await fetch("https://food-be-three.vercel.app/api/register", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    console.log(datas)
    if (datas.user) {
    
      router.push("/login");
    } else {
      alert("wrong email");
    }
};
return (
    <>

        <Stack>

        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Stack width={"448px"} padding={4} gap={6} margin={"auto"} marginTop={"74px"} borderRadius={2} marginBottom={"107px"}>
            <Typography fontSize={"28px"} fontWeight={"700"} margin={"auto"}>Бүртгүүлэх</Typography>
            <Stack gap={2}>
              <Stack gap={"4px"}>
                <Typography>Нэр</Typography>
               <TextField    onChange={e => setName(e.target.value)}
                  required id="outlined-basic" type="name" placeholder="Нэрээ оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>И-мэйл</Typography>
                
                <TextField    onChange={e => setEmail(e.target.value)}
                  required id="outlined" type="email" placeholder="И-мэйл хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}} />
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Хаяг</Typography>
                
                <TextField    onChange={e => setAddress(e.target.value)}
                  required id="outline" type="address" placeholder="Та хаягаа оруулна уу" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
                
              </Stack>
              <Stack gap={"4px"}>
                <Typography>Админ нэр</Typography>
                
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
          <OutlinedInput
              onChange={e => setStatus(e.target.value)}
              required
            id="outlined-adornment"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
                <IconButton
                  aria-label="toggle password visibility"
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
              <Stack gap={"4px"}>
                <Typography>Нууц үг</Typography>
               
                <FormControl sx={{ m: 0, width: '100%', backgroundColor:'#ECEDF0' }} variant="outlined">
          
          <OutlinedInput
             onChange={e => setPassword(e.target.value)}
             required
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              
                <IconButton
                  aria-label="toggle password visibility"
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
            <Stack gap={4}>
               <Stack paddingRight={2} flexDirection={"row"} gap={1}>
               <Checkbox {...label} color="default"/>
                 <Typography mt={1}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
               </Stack>
             <Button
type="submit"
  sx={{
    px: "16px",
    py: "8px",
    borderRadius: "8px",
    backgroundColor: "#18BA51",
    color: "white",
    fontSize: "16px",
    border: "1px solid #18BA51",'&:hover': {
                    backgroundColor: "#16A243", 
                  },
  }}
>
Бүртгүүлэх
</Button>
            </Stack>
         </Stack>
         </form>
         </React.Fragment>
        </Stack>
   </>
  );
};
export default Home;
