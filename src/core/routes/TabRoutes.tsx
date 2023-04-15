import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Profile } from '~/views/Profile'
import { Ranking } from '~/views/Ranking'
import { theme } from '../styles/theme'
import { Home } from '~/views/Home'

const Tab = createBottomTabNavigator()

export const TabRoutes = () => {
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
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={32} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={32} color={color} />
            )
          }}
        />

        <Tab.Screen
          name="Ranking"
          component={Ranking}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="leaderboard" size={32} color={color} />
            )
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
