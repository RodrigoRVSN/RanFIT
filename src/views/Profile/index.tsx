import * as S from './styles'
import { Background } from '~/components/Background'
import { useAuth } from '~/contexts/AuthContext'
import { Avatar } from '~/components/Avatar'
import { DataCard } from './DataCard'
import { SignOutButton } from './SignOutButton'
import { useRanking } from '~/hooks/useRanking'

export const Profile = () => {
  const { userData } = useAuth()
  const { userRankingPosition } = useRanking(userData.id)

  return (
    <Background>
      <SignOutButton />

      <S.ImageProfile>
        <Avatar size={140} imageUrl={userData.avatarUrl} isHighlighted />
        <S.Level>lvl. {userData.level}</S.Level>
      </S.ImageProfile>

      <S.Username>{userData.name}</S.Username>

      <S.CardsContainer>
        <DataCard title={userData.energy} description="mV gerados" />
        <DataCard title={userData.time} description="minutos" />
        <DataCard title={`#${userRankingPosition}`} description="no ranking" />
      </S.CardsContainer>
    </Background>
  )
}
