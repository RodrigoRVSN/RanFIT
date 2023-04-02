
import { Text } from 'react-native';
import * as S from "./styles";
import { Background } from "../../components/Background";

export const SignIn = () => {
  return (
    <Background>
      <S.Title>Bem-vindo ao RanFIT!</S.Title>
      <Text>Para participar e começar a pontuar, entre na sua conta!</Text>
    </Background>
  )
}