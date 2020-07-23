import React from "react";
import "../axios";
import Router from "./Router";
import { ThemeProvider as MaterialThemeProvider, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import Theme from "../common/styles/theme";
import { BrowserRouter } from "react-router-dom";
import { materialTheme } from "../styles/materialStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default () => (
  <>
    <ThemeProvider theme={Theme}>
      <MaterialThemeProvider theme={materialTheme}>
        <BrowserRouter>
          <CssBaseline>
            <Router />
            <ToastContainer />
          </CssBaseline>
        </BrowserRouter>
      </MaterialThemeProvider>
    </ThemeProvider>
  </>
);
