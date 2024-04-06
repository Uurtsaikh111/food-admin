import { Button, Modal, Stack, TextField, Typography } from "@mui/material"
import React, { Dispatch, SetStateAction, useState } from "react";
import { CloseButton } from "../Images";


  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 587,
    bgcolor: "background.paper",
  
  };
export const CategoryModal=({handleClose, open}: { handleClose: Dispatch<SetStateAction<boolean >>, open:boolean})=>{
    const [name, setName] = useState("")
 
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
          const data = {
            name:name,
      }
           
           const res = await fetch("http://localhost:4000/api/category", {
          body: JSON.stringify(data),
          method: "POST",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
        });
        const datas = await res.json();
        console.log(datas)
        if (datas.name) {
            handleClose(false);
          } else {
            alert("wrong category name");
          }
    };

    return(
        <Stack>
           <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            
            <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <Stack sx={style} borderRadius={1}>
            <Stack px={3} py={2} direction={"row"} justifyContent={"space-between"}>
                <Stack onClick={()=>handleClose(false)} justifyContent={"center"}>
                  <CloseButton />
                </Stack>
                <Typography fontSize={"24px"} fontWeight={700}>Create new category</Typography>
                <Typography color={"white"}>icon</Typography>
            </Stack>
            <Stack px={3} py={3} gap={1}>
              <Typography>Category name</Typography>
              <TextField  onChange={e =>setName(e.target.value)}
                  required id="outline" type="name" placeholder="Placeholder" variant="outlined" sx={{backgroundColor:'#ECEDF0'}}/>
            </Stack>
             <Stack px={3} py={3} justifyContent={"flex-end"} direction={"row"} gap={2} borderTop={"1px #E0E0E0 solid"}>
                <Button>Clear</Button>
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
              
                >Continue</Button>
             </Stack>
            </Stack>
            </form>
         </React.Fragment>
        </Modal> 
        </Stack>
    )
}