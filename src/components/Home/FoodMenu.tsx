import { Button, Stack, Typography } from "@mui/material"

export const FoodMenu = () =>{
    return(
        <Stack width={"282px"} py={"26px"} px={3} bgcolor={"white"} gap={"40px"}>
        <Typography fontSize={"22px"} fontWeight={700}>Food menu</Typography>
        <Stack><Button>Breakfast</Button> </Stack>
    </Stack>
    )
}