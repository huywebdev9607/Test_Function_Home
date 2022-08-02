import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "src/components/Loading";
import { theme } from "src/theme/theme";


const ErrorFallback = () => {
  return (
    <div role="alert">
      <h2>Ooops, something went wrong :( </h2>
      <Button onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <React.Suspense fallback={<Loading loading={true}/>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <React.Fragment>{children}</React.Fragment>
        </Router>
      </ErrorBoundary>
    </React.Suspense>
     </ThemeProvider>
  );
}
