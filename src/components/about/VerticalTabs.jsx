import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import clickSound from "./click.wav";

function VerticalTabs({ value, onChange }) {
  const audioRef = React.useRef(null);

  const handleChange = (event, newValue) => {
    audioRef.current.play();

    onChange(event, newValue);
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 9,
          bgcolor: "transparent",
          display: "flex",
          height: 424,
          width: 250,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div className="bg-slate-900 text-white" style={{ borderRadius: 10 }}>
          <Tabs
            className="text-white"
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{
              borderRight: 2,
              borderColor: "divider",
              textTransform: "none",
              fontWeight: "bold",
              color: "white",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Tab
              className="mt-6 text-white text-bold "
              style={{ fontFamily: "montserrat", alignItems: "center" }}
              label="About "
            />
            <Tab
              className="text-white "
              style={{ fontFamily: "montserrat", alignItems: "center" }}
              label="Details"
            />
            <Tab
              className="text-white "
              label="2023"
              style={{ fontFamily: "montserrat", alignItems: "center" }}
            />
            <Tab
              className="text-white "
              label="2022"
              style={{ fontFamily: "montserrat", alignItems: "center" }}
            />
          </Tabs>
        </div>
      </Box>
      {/* Audio element for the sound effect */}
      <audio ref={audioRef} src={clickSound} />
    </>
  );
}

export default VerticalTabs;
