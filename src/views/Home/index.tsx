import * as S from "./styles";
import { Background } from "../../components/Background";

import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { userInfo } = useAuth()

  console.log({ userInfo })

  return (
    <Background>
      <S.Title>Bem-vindo ao RanFIT! {userInfo.email}</S.Title>
    </Background>
  )
}