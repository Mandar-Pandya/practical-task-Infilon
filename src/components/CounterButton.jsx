import { Button } from "@mui/material";
import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </Button>
  );
};

export default CounterButton;
