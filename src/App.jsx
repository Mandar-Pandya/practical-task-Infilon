import TabOnePage from "./pages/TabOnePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import {
  TabFivePage,
  TabFourPage,
  TabThreePage,
  TabTwoPage,
} from "./routes/lazyRoutes";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/tab1" />} />
          <Route path="/tab1" element={<TabOnePage />} />
          <Route
            path="/tab2"
            element={
              <Suspense fallback={"Loading..."}>
                <TabTwoPage />
              </Suspense>
            }
          />
          <Route
            path="/tab3"
            element={
              <Suspense fallback={"Loading..."}>
                <TabThreePage />
              </Suspense>
            }
          />
          <Route
            path="/tab4"
            element={
              <Suspense fallback={"Loading..."}>
                <TabFourPage />
              </Suspense>
            }
          />
          <Route
            path="/tab5"
            element={
              <Suspense fallback={"Loading..."}>
                <TabFivePage />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
