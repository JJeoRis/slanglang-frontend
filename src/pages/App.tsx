import React from "react";
import Router from "./Router";
import { ThemeProvider as MaterialThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { materialTheme } from "../styles/materialStyle";

export default () => (
  <>
    <MaterialThemeProvider theme={materialTheme}>
      <BrowserRouter>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </BrowserRouter>
    </MaterialThemeProvider>
  </>
);
