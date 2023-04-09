import { createContext, useContext } from 'react'
import { useAuthRequest } from 'expo-auth-session/providers/google'
import { useEffect, useState } from 'react'
import { EXPO_CLIENT_ID, G_CLIENT_ID } from '@env'
import type {
  AuthContextProps,
  AuthProviderProps,
  IUser
} from './AuthContext.types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getGoogleProfile } from '~/core/services/googleService'
import { createUserIfNotExists, getUserById } from './AuthContext.helpers'

export const USER_KEY = '@ranfit_user'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingStorage, setIsLoadingStorage] = useState(false)
  const [token, setToken] = useState('')
  const [userData, setUserData] = useState<IUser>()

  const [, response, onGoogleSignIn] = useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    clientId: G_CLIENT_ID,
    scopes: ['openid', 'profile', 'email']
  })

  const onSignOut = async () => {
    await AsyncStorage.removeItem(USER_KEY)
    setUserData(null)
  }

  const getUserInfo = async () => {
    try {
      setIsLoading(true)
      const user = await getGoogleProfile(token)

      const userInfo = await createUserIfNotExists(user)

      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userInfo))
      setUserData(userInfo)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken)
      getUserInfo()
    }
  }, [response, token])

  const getUserFromStorage = async () => {
    try {
      setIsLoadingStorage(true)
      const user = await AsyncStorage.getItem(USER_KEY)
      const parsedUser: IUser = JSON.parse(user)
      const userInDatabase = await getUserById(parsedUser.id)
      user && setUserData(userInDatabase.data() as IUser)
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoadingStorage(false)
    }
  }

  useEffect(() => {
    if (!userData) {
      getUserFromStorage()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoadingStorage,
        userData,
        onGoogleSignIn,
        onSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
