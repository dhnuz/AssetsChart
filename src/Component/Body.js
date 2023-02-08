import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Typography } from "@mui/material";

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { useGlobalContext } from "./context";
import { Doughnut, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

const Body = () => {
  const { lineChart, selectedIndex, doughnut } = useGlobalContext();

  console.log(selectedIndex);

  console.log(doughnut);
  return (
    <div className="charts">
      <div className="doughnut">
        <Typography
          sx={{
            fontSize: { lg: "15px", sm: "15px", xs: "12px" },
          }}
        >
          Assets Allocation
        </Typography>
        <div className="row">
          <div className="doughnut_chart">
            <Doughnut className="dnut" data={doughnut}></Doughnut>
            <b>${doughnut.assetsValue}</b>
            <p>Total Assets </p>
          </div>

          <div className="doughnut_disc">
            {doughnut.backgroundColorr.map((c, index) => {
              return (
                <div key={index} className="colo">
                  <div
                    style={{
                      backgroundColor: `${c}`,
                      borderRadius: "50%",
                      height: "5px",
                      width: "5px",
                    }}
                  />
                  <span>{doughnut.information[index]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="line">
        <div className="title">
          {" "}
          <Typography
            sx={{
              fontSize: { lg: "15px", sm: "15px", xs: "12px" },
              lineHeight: "1.5rem",
            }}
            mt={{ lg: "10px", sm: "8px", xs: "6px" }}
            mb={{ lg: "100px", sm: "40px", xs: "30px" }}
            ml="10px"
          >
            Summary Financial
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "10px", sm: "7px", xs: "5px" },

              lineHeight: "1.5rem",
            }}
            mb={{ lg: "100px", sm: "40px", xs: "30px" }}
          >
            Last 12 months data as of last month
          </Typography>
        </div>
        <hr />
        <Line className="linee" data={lineChart}></Line>
      </div>
    </div>
  );
};

export default Body;
