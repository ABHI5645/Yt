import React from 'react'
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import YouTubeLogo from "../components/assests/YouTube-Logo.png";
import  SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position:'stick',background:'#000',top:0,justifyContent:'space-between'}}>
        <Link to='/' style={{display:'flex',alignItems:'center'}}>
            <img src={YouTubeLogo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
   
  )
}

export default Navbar


