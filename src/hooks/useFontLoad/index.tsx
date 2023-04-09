import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Inter_400Regular } from '@expo-google-fonts/inter'
import { SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk'

SplashScreen.preventAutoHideAsync()

export const useFontLoad = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    SpaceGrotesk_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return { fontsLoaded, onLayoutRootView }
}
