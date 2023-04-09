import { ThemeProvider } from "styled-components";
import { StatusBar } from 'expo-status-bar';
import { Routes } from "~/core/routes";
import { theme } from "~/core/styles/theme";

import { View } from "react-native";
import { useFontLoad } from "~/hooks/useFontLoad";
import { AuthProvider } from "~/contexts/AuthContext";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useFontLoad()

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <View onLayout={onLayoutRootView} />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
