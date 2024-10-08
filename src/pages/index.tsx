import { CategoryFoods, FoodMenu } from "@/components/Home";
import { Container, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
 
  const [menu, setMenu] = useState("")
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      router.push("/login");
      
    }
  }, [router]);

  return (

       <Stack bgcolor={"#F7F7F8"}>
        <Container maxWidth={"lg"}>
           <Stack direction={"row"} gap={4}>
             <FoodMenu setMenu={setMenu}/>
             <CategoryFoods menu={menu}/>
           </Stack>
         </Container>
       </Stack>
  );
}
