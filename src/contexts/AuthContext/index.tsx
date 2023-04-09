import { createContext, useContext } from 'react'
import { useAuthRequest } from 'expo-auth-session/providers/google'
import { makeRedirectUri } from 'expo-auth-session'
import { useEffect, useState } from 'react'
import { EXPO_CLIENT_ID, G_CLIENT_ID } from '@env'
import type {
  AuthContextProps,
  AuthProviderProps,
  IUser
} from './AuthContext.types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FIREBASE_DB } from '~/core/firebase/config'
import { getGoogleProfile } from '~/core/services/googleService'
import { doc, getDoc, setDoc } from '@firebase/firestore'

export const USER_KEY = '@ranfit_user'

const redirectUri = makeRedirectUri({ useProxy: true })

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [token, setToken] = useState('')
  const [userInfo, setUserInfo] = useState<IUser>()

  const [_, response, onGoogleSignIn] = useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    clientId: G_CLIENT_ID,
    scopes: ['openid', 'profile', 'email'],
    redirectUri
  })

  const createUserIfNotExists = async (user: IUser) => {
    const userData: IUser = {
      id: user.id,
      name: user.name,
      picture: user.picture,
      energy: 0,
      level: 0,
      time: 0
    }

    const userAlreadyExists = (
      await getDoc(doc(FIREBASE_DB, 'users', user.id))
    ).exists()
    !userAlreadyExists &&
      (await setDoc(doc(FIREBASE_DB, 'users', user.id), userData))
  }

  const getUserInfo = async () => {
    try {
      setIsLoading(true)
      const user = await getGoogleProfile(token)
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user))

      await createUserIfNotExists(user)

      setUserInfo(user)
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

  const getStorageUser = async () => {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      user && setUserInfo(JSON.parse(user))
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    if (!userInfo) {
      getStorageUser()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoading, userInfo, onGoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
