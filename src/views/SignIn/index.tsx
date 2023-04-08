import * as S from "./styles";
import { Background } from "../../components/Background";

import Logo from '../../core/assets/images/logo.svg'
import GoogleLogo from '../../core/assets/images/google-logo.svg'
import { useAuth } from "../../contexts/AuthContext";

export const SignIn = () => {
  const { onGoogleSignIn } = useAuth()

  return (
    <Background>
      <Logo width={200} height={200} />

      <S.Title>Bem-vindo ao RanFIT!</S.Title>

      <S.Subtitle>
        Para participar e começar a pontuar de maneira simples e divertida, entre na sua conta!
      </S.Subtitle>


      <S.Button label="Entrar com Google" Icon={GoogleLogo} onPress={onGoogleSignIn} />
    </Background>
  )
}