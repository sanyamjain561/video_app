import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton , Box } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };
  return (
    <Paper
    
      component="form"
      onSubmit={handleSubmit}
      sx={{ borderRadius: 25, pl: 2, mr: { sm: 5 } }}
    ><Box sx={{display:"flex" , borderRadius:"25px"}}>
      <input
        style={{borderRadius:"25px"}}
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: { md:"10px" , xs :" 10px 0"}, color: "#9D00FF" }}>
        <Search/> 
       </IconButton> 
       </Box>
    </Paper>
  );
};

export default SearchBar;
