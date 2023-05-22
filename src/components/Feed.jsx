import { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../Utilities/fetchFromAPI";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Recommendations from "./Recommendations";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "90vh" },
          background: "rgb(34,35,39)",
          color: "black",
          borderRight: "1px solid rgb(34,35,30)",
          p: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />
        {/* <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Made by Sharad <span>&copy;</span>
        </Typography> */}
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2  }}>
        <Recommendations
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
        />

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
