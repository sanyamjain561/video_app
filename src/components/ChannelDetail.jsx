import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../Utilities/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setvideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideos(data.items)
    );
  }, [id]);
  console.log(channelDetail);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 91%)",
            height: "200px",
          }}
        />
        { channelDetail && <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />}
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "140px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
