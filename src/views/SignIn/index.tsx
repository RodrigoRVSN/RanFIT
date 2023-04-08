import * as S from "./styles";
import { Background } from "../../components/Background";

import Logo from '../../core/assets/images/logo.svg'
import GoogleLogo from '../../core/assets/images/google-logo.svg'
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { makeRedirectUri } from "expo-auth-session";
import { useEffect, useState } from "react";
import { EXPO_CLIENT_ID, G_CLIENT_ID } from '@env'

const redirectUri = makeRedirectUri({ useProxy: true });

export const SignIn = () => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [_, response, promptAsync] = useAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    clientId: G_CLIENT_ID,
    scopes: ['openid', 'profile', 'email'],
    redirectUri
  })

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  console.log({ userInfo })

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // handle error
    }
  };

  return (
    <Background>
      <Logo width={200} height={200} />

      <S.Title>Bem-vindo ao RanFIT!</S.Title>

      <S.Subtitle>
        Para participar e começar a pontuar de maneira simples e divertida, entre na sua conta!
      </S.Subtitle>

      <S.Button label="Entrar com Google" Icon={GoogleLogo} onPress={promptAsync} />
    </Background>
  )
}