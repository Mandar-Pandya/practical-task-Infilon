import React from "react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
const Providers = ({ children }) => {
  return (
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </HashRouter>
  );
};

export default Providers;
