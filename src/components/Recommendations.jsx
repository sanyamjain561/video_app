import { Stack } from "@mui/material";
import { recom } from "../Utilities/constants";

const Sidebar = (props) => {
  const selectedCategory = props.selectedCategory;
  const setselectedCategory = props.setselectedCategory;
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        height: { sx: "auto", md: "9vh" },
        flexDirection: { md: "row" },
      }}
    >
      {recom.map((item) => {
        return (
          <button
            className="recom category-btn"
            onClick={() => setselectedCategory(item.name)}
            style={{
              background: item.name === selectedCategory && "#FFF",
              color: "#030303",
            }}
            key={item.name}
          >
            <span
              style={{
                color: item.name === selectedCategory ? "#030303" : "#FFF",
                marginRight: "15px",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                opacity: item.name === selectedCategory ? 1 : 0.8,
                color: item.name === selectedCategory ? "#030303 " : "#fff",
              }}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
