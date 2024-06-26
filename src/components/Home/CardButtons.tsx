import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Stack, TextField } from '@mui/material';
import { foodType } from './types/foodtype';



export const CardButtons=({data}:{ data:foodType | null
})=> {
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteSubmit = async (e: any) => {
    e.preventDefault();
    const deleteData = {
      id: e.target.id.value,
    };
    const res = await fetch("https://food-be-three.vercel.app/api/food", {
      body: JSON.stringify(deleteData),
      method: "Delete",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const delData = await res.json();
    console.log(delData)
    handleClose()
    // const newData = data?.filter((a: dataType) => a._id != e.target.id.value);
    // setData(newData as dataType[]);
  };
  const updateSubmit = async (e: any) => {
    e.preventDefault();
    const updateData = {
      id: e.target.id.value,
      updateName: e.target.updateName.value,
      updatePrice: e.target.updatePrice.value,
      updateDiscount: e.target.updateDiscount.value,
     
    };
    const res = await fetch("https://food-be-three.vercel.app/api/food", {
      body: JSON.stringify(updateData),
      method: "Put",
      mode: "cors",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
    });
    const updatedData = await res.json();
    console.log("updatedData",updatedData);
    if (updatedData) {
    handleClose()
    } else {
      alert("wrong food name");
    }
   
  };
  

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
           <Stack px={2}> <form onSubmit={updateSubmit} className="flex gap-5">
           <Stack gap={1}>
            <TextField
               name='updateName'
                  placeholder="Name"
                  variant="outlined"
                  sx={{ backgroundColor: "#ECEDF0"}}
                />
               <TextField
                   name='updatePrice'
                  placeholder="Price"
                  variant="outlined"
                  sx={{ backgroundColor: "#ECEDF0"}}
                />
              
                <TextField
                  name='updateDiscount'
                  placeholder="Discount"
                  variant="outlined"
                  sx={{ backgroundColor: "#ECEDF0"}}
                />
               
                <Button
                  name="id"
                 value={data?._id}
                  type="submit"
                  sx={{ color: "black", display:"flex", justifyContent:"flex-start"}}
                >
                  Edit food
                </Button></Stack>
            </form>
            <form onSubmit={deleteSubmit} className="flex gap-5">
                <Button
                  name="id"
                  value={data?._id}
                  type="submit"
                  sx={{ color: "red" }}
                >
                  Delete Food
                </Button>
            </form>

            </Stack>
      </Menu>
    </div>
  );
}