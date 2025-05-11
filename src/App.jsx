import TabOnePage from "./pages/TabOnePage";
import TabTwoPage from "./pages/TabTwoPage";
import TabThreePage from "./pages/TabThreePage";
import TabFourPage from "./pages/TabFourPage";
import TabFivePage from "./pages/TabFivePage";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AppBar, Container, Tab, Tabs } from "@mui/material";

const tabs = [
  { label: "Tab 1", value: "/tab1" },
  { label: "Tab 2", value: "/tab2" },
  { label: "Tab 3", value: "/tab3" },
  { label: "Tab 4", value: "/tab4" },
  { label: "Tab 5", value: "/tab5" },
];

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs
          value={pathname}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/tab1" />} />
          <Route path="/tab1" element={<TabOnePage />} />
          <Route path="/tab2" element={<TabTwoPage />} />
          <Route path="/tab3" element={<TabThreePage />} />
          <Route path="/tab4" element={<TabFourPage />} />
          <Route path="/tab5" element={<TabFivePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
