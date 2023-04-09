import { Image } from 'react-native'
import { View } from 'react-native'
import { theme } from '~/core/styles/theme'

export const LoadingScreen = () => {
  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <Image
        source={require('../../core/assets/images/splash-screen.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </View>
  )
}
