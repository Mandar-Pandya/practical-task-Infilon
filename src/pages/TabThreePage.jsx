import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const TabThreePage = () => {
  const [count, setCount] = useState(0);
  const [output, setOutput] = useState([]);

  const printHello = (n) => {
    if (n <= 0) {
      setOutput((prev) => [...prev, "STOP"]);
      return;
    }
    setOutput((prev) => [...prev, "Hello Task"]);
    printHello(n - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput([]);
    printHello(count);
  };

  const handleReset = () => {
    setOutput([]);
    setCount(0);
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter a number"
          type="number"
          value={count}
          onChange={(e) => setCount(Math.max(0, parseInt(e.target.value)))}
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{ flexWrap: "wrap" }}
        >
          <Button type="submit" variant="contained" color="primary">
            Print Hello
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => handleReset()}
          >
            Reset
          </Button>
        </Stack>
      </form>

      <Box mt={2}>
        {output.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TabThreePage;
