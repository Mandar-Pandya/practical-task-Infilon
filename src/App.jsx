import TabOnePage from "./pages/TabOnePage";
import TabTwoPage from "./pages/TabTwoPage";
import TabThreePage from "./pages/TabThreePage";
import TabFourPage from "./pages/TabFourPage";
import TabFivePage from "./pages/TabFivePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
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
