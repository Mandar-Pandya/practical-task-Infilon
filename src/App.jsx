import TabOnePage from "./pages/TabOnePage";
import TabTwoPage from "./pages/TabTwoPage";
import TabThreePage from "./pages/TabThreePage";
import TabFourPage from "./pages/TabFourPage";
import TabFivePage from "./pages/TabFivePage";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppBar, Container, Tab, Tabs } from "@mui/material";

function App() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // Navigate to the corresponding tab route
    const routes = ["/tab1", "/tab2", "/tab3", "/tab4", "/tab5"];
    navigate(routes[newValue]);
  };
  return (
    <>
      <div className="App">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
            <Tab label="Tab 4" />
            <Tab label="Tab 5" />
          </Tabs>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<TabOnePage />} />
            <Route path="/tab1" element={<TabOnePage />} />
            <Route path="/tab2" element={<TabTwoPage />} />
            <Route path="/tab3" element={<TabThreePage />} />
            <Route path="/tab4" element={<TabFourPage />} />
            <Route path="/tab5" element={<TabFivePage />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
