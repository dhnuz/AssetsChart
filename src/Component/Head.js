import React from "react";
import { useGlobalContext } from "./context";
import { objects } from "./data";
import { AiFillDollarCircle } from "react-icons/ai";
import { Typography } from "@mui/material";

const Head = () => {
  const { selectedIndex, setSelectedIndex } = useGlobalContext();

  const handleClick = (i) => {
    console.log(i);
    setSelectedIndex(i);
  };

  return (
    <div className="head_container">
      {objects.map((obj, i) => {
        return (
          <div
            key={i}
            style={
              i === selectedIndex
                ? { border: " 2px solid", borderColor: `${obj.borderColor}` }
                : {
                    borderBottom: " 3px solid",
                    borderBottomColor: `${obj.borderColor}`,
                  }
            }
            className="items"
            onClick={() => handleClick(i)}
          >
            <div className="item_icon">
              <AiFillDollarCircle
                className="icon"
                style={{
                  backgroundColor: `${obj.borderColor}`,
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="item_revenue">
              <Typography
                sx={{ fontSize: { lg: "20px", sm: "15px", xs: "10px" } }}
                className="item_name"
              >
                {obj.name}
              </Typography>
              <Typography
                sx={{ fontSize: { lg: "20px", sm: "15px", xs: "10px" } }}
                className="item_value"
              >
                {obj.value}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Head;
