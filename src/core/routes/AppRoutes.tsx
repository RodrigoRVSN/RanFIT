import { createStackNavigator } from '@react-navigation/stack'
import { QRCodeCamera } from '~/views/QRCodeCamera'
import { TabRoutes } from './TabRoutes'

const Stack = createStackNavigator()

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTab" component={TabRoutes} />
      <Stack.Screen name="QRCodeCamera" component={QRCodeCamera} />
    </Stack.Navigator>
  )
}
