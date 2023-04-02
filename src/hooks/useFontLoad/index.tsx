import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const assetsPath = '../../../assets/fonts'

export const useFontLoad = () => {
  const [fontsLoaded] = useFonts({
    'Press-Start': require(`${assetsPath}/PressStart2P-Regular.ttf`),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView }
}