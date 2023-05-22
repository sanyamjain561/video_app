import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { demoProfilePicture } from "../Utilities/constants";
import { demoChannelTitle } from "../Utilities/constants";


const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { sm: "356px", md: "300px" },
        height: "300px",
        margin: "auto",
        marginTop: marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail.id.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail.snippet.thumbnails.high.url || demoProfilePicture
            }
            alt={channelDetail.snippet.title || demoChannelTitle}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: "2",
            }}
          />
          <Typography variant="h6">
            {channelDetail.snippet.title || demoChannelTitle }
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
