import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

const TabFivePage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      sx={{ flexWrap: "wrap" }}
    >
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setCount1(count1 + 1)}
      >
        {count1}
      </Button>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setCount2(count2 + 1)}
      >
        {count2}
      </Button>
    </Stack>
  );
};

export default TabFivePage;
