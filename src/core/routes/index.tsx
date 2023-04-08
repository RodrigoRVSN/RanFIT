import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../../contexts/AuthContext"
import { AuthRoutes } from "./AuthRoutes"
import { AppRoutes } from "./AppRoutes"

export const Routes = () => {
  const { userInfo } = useAuth()

  return (
    <NavigationContainer>
      {userInfo ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}