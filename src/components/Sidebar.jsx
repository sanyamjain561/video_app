import { Stack } from "@mui/material";
import { categories } from "../Utilities/constants";

const Sidebar = (props) => {
  const selectedCategory = props.selectedCategory;
  const setselectedCategory = props.setselectedCategory;
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => {
        return (
          <button
            className="category-btn"
            onClick={() => setselectedCategory(item.name)}
            style={{
              background: item.name === selectedCategory && "#CFD2CF",
              color: "white",
            }}
            key={item.name}
          >
            <span
              style={{
                color: item.name === selectedCategory ? "#000" : "#CFD2CF",
                marginRight: "15px",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                opacity: item.name === selectedCategory ? 1 : 0.8,
                color: item.name === selectedCategory ? "#000 " : "white",
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
