import { Box } from "@mui/material";
import React from "react";

const TabOnePage = () => {
  return (
    <Box sx={{ height: "500px" }}>
      <iframe
        src="https://www.wikipedia.org/"
        title="Wikipedia"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </Box>
  );
};

export default TabOnePage;
