import { ThemeProvider } from "styled-components";
import { theme } from "./core/styles/theme";
import { StatusBar } from 'expo-status-bar';
import { Routes } from "./core/routes";

import { View } from "react-native";
import { useFontLoad } from "./hooks/useFontLoad";


export default function App() {
  const { fontsLoaded, onLayoutRootView } = useFontLoad()

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View onLayout={onLayoutRootView} />

      <StatusBar style="auto" />
      <Routes />
    </ThemeProvider>
  );
}
