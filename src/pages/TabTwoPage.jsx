import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TabTwoPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        onClick={() => navigate("/tab3")}
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        Navigate to Tab 3
      </Button>
    </Box>
  );
};

export default TabTwoPage;
