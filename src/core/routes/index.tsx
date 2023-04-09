import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '~/contexts/AuthContext'
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'

export const Routes = () => {
  const { userData } = useAuth()

  return (
    <NavigationContainer>
      {userData ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
