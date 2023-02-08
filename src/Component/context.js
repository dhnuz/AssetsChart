import React, { createContext, useContext, useEffect, useState } from "react";
import { data, linedata } from "./data";

const AssetsContext = createContext();

const ContextProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [doughnut, setDoughnut] = useState(data[1]);
  const [lineChart, setLineChart] = useState(linedata[1]);

  useEffect(() => {
    setDoughnut(data[selectedIndex]);
    setLineChart(linedata[selectedIndex]);
  }, [selectedIndex, lineChart]);

  return (
    <AssetsContext.Provider
      value={{ setSelectedIndex, doughnut, lineChart, selectedIndex }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AssetsContext);
};
export { AssetsContext, ContextProvider };
