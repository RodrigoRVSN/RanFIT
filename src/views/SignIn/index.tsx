import * as S from "./styles";
import { Background } from "../../components/Background";

import Streching from '../../core/assets/images/stretching.svg'
import GoogleLogo from '../../core/assets/images/google-logo.svg'

export const SignIn = () => {
  return (
    <Background>
      <Streching width={250} height={250} />

      <S.Title>Bem-vindo ao RanFIT!</S.Title>

      <S.Subtitle>
        Para participar e começar a pontuar, entre na sua conta!
      </S.Subtitle>

      <S.Button label="Usar Google" Icon={GoogleLogo} onPress={() => { }} />
    </Background>
  )
}