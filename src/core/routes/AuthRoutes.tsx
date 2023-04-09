import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from "~/views/SignIn";

const Stack = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  )
}