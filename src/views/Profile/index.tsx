import * as S from './styles'
import { Background } from '~/components/Background'
import { useAuth } from '~/contexts/AuthContext'
import { Image } from 'react-native'

export const Profile = () => {
  const { userInfo } = useAuth()

  // TODO: implement Profile Screen
  return (
    <Background>
      <S.Title>Profile</S.Title>

      <Image
        source={{ uri: userInfo.picture }}
        style={{ width: 100, height: 100 }}
      />
    </Background>
  )
}
