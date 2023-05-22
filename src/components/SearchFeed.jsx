import { useEffect, useState } from "react";
import Videos from "./Videos";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utilities/fetchFromAPI";
import { Box, Typography } from "@mui/material";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{ overflowY: "auto", height: "90vh", flex: 2, margin: "auto" }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for <span style={{ color: "#9457e7" }}>{searchTerm}</span>{" "}
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
