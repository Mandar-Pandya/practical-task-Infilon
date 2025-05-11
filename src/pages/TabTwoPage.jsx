import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";

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

      <UserTable />
    </Box>
  );
};

export default TabTwoPage;
