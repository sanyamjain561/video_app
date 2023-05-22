import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../Utilities/constants";

const VideoCard = (video) => {
  const videoId = video.video.id.videoId;
  const snippet = video.video.snippet;
  return (
    <Card
      sx={{
        width: { md: "300px", xs: "360px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { md: "300px", xs: "360px" }, height: 160 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet.channelId
                ? `/channel/${snippet.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
