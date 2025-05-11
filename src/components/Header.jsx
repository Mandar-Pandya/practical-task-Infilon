import { AppBar, Tab, Tabs } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { label: "Tab 1", value: "/tab1" },
  { label: "Tab 2", value: "/tab2" },
  { label: "Tab 3", value: "/tab3" },
  { label: "Tab 4", value: "/tab4" },
  { label: "Tab 5", value: "/tab5" },
];

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };
  return (
    <AppBar position="static">
      <Tabs
        value={pathname}
        onChange={handleChange}
        centered
        textColor="inherit"
        aria-label="secondary tabs example"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.label} value={tab.value} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default Header;
