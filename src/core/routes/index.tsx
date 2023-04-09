import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '~/contexts/AuthContext'
import { AuthRoutes } from './AuthRoutes'
import { AppRoutes } from './AppRoutes'
import { LoadingScreen } from '~/components/LoadingScreen'

export const Routes = () => {
  const { userData, isLoadingStorage } = useAuth()

  if (isLoadingStorage) return <LoadingScreen />

  return (
    <NavigationContainer>
      {userData ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}
