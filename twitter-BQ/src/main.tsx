import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { NotificationsProvider } from "@toolpad/core";
import { AuthProvider } from "./providers/AuthProvider.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <NotificationsProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </NotificationsProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  </StrictMode>
);
