import { Stack } from "@mui/material";
import CounterButton from "../components/CounterButton";

const TabFivePage = () => {
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: "wrap" }}
    >
      <CounterButton />
      <CounterButton />
    </Stack>
  );
};

export default TabFivePage;
