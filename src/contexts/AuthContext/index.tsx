import { createContext, useContext } from "react"
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { makeRedirectUri } from "expo-auth-session";
import { useEffect, useState } from "react";
import { EXPO_CLIENT_ID, G_CLIENT_ID } from '@env'
import type { AuthContextProps, AuthProviderProps, IUser } from "./AuthContext.types";

const redirectUri = makeRedirectUri({ useProxy: true });

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUser>();

  const [_, response, onGoogleSignIn] = useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    clientId: G_CLIENT_ID,
    scopes: ['openid', 'profile', 'email'],
    redirectUri
  })

  const getUserInfo = async () => {
    try {
      console.log(token)
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.error({ error })
      // handle error
    }
  };

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  return (
    <AuthContext.Provider value={{ userInfo, onGoogleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}