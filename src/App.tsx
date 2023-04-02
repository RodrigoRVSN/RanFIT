
import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./core/styles/theme";
import { StatusBar } from 'expo-status-bar';
import { SignIn } from "./views/SignIn";

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <StatusBar style="auto" />
      <SignIn />
    </ThemeProvider>
  );
}
