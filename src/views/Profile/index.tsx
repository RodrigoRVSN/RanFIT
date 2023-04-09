import * as S from './styles'
import { Background } from '~/components/Background'
import { useAuth } from '~/contexts/AuthContext'
import { Avatar } from '~/components/Avatar'
import { DataCard } from './DataCard'

export const Profile = () => {
  const { userInfo } = useAuth()

  return (
    <Background>
      <S.ImageProfile>
        <Avatar size={140} imageUrl={userInfo.picture} isHighlighted />
        <S.Level>lvl. 7</S.Level>
      </S.ImageProfile>

      <S.Title>{userInfo.name}</S.Title>

      <S.CardsContainer>
        <DataCard title={0} description="mV gerados" />
        <DataCard title={0} description="minutos" />
        <DataCard title="#1" description="no ranking" />
      </S.CardsContainer>
    </Background>
  )
}
