import { Router } from "./Routes/Router";
import { useState } from "react";
import React from "react";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
