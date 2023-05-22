import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import Videos from "./Videos";
import Loader from "./Loader";
import { fetchFromAPI } from "../Utilities/fetchFromAPI";
import { CheckCircle , ThumbUp , RemoveRedEye } from "@mui/icons-material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
    });
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const title = videoDetail.snippet.title;
  const channelId = videoDetail.snippet.channelId;
  const channelTitle = videoDetail.snippet.channelTitle;
  const viewCount = videoDetail.statistics.viewCount;
  const likeCount = videoDetail.statistics.likeCount;

  console.log(videos);
  return (
    <Box  height="100%">
      <Stack direction={{ md:"row", sm:"column"}} >
        <Stack width="70vw" direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
              <ReactPlayer 
                height="70vh"
                width="70vw"
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack
                direction="column"
                gap="10px"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "18px", color: "gray", ml: "5px"  , mb:"-5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <RemoveRedEye sx = {{ fontSize: "16px", color: "gray", ml: "5px" , mr: "8px" , mb:"-3px"   }}/>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  <ThumbUp sx = {{ fontSize: "16px", color: "gray", ml: "5px" , mr: "8px" , mb:"-3px"   }}/>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{backgroundColor : "grey"}}
          width="20vw"
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
