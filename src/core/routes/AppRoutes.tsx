import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../../views/Home";
import { theme } from "../styles/theme";
import { Platform, View } from "react-native";
import { Feather, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: theme.colors.primary,
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarStyle: {
            borderTopWidth: 0,
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            backgroundColor: theme.colors.background,
            height: 64
          },
        }}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Feather name='home' size={32} color={color} />
          }}
        />

        <Tab.Screen
          name='User'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Feather name='user' size={32} color={color} />
          }}
        />

        <Tab.Screen
          name='Ranking'
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons name='leaderboard' size={32} color={color} />
          }}
        />

      </Tab.Navigator>

      <View
        style={{
          borderTopColor: theme.colors.gray200,
          borderTopWidth: 1,
          position: 'absolute',
          bottom: 64,
          width: '100%'
        }}
      />
    </>
  )
}