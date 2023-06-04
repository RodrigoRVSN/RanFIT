import * as S from './styles'
import { Background } from '~/components/Background'
import { useAuth } from '~/contexts/AuthContext'
import { Avatar } from '~/components/Avatar'
import { DataCard } from './DataCard'
import { SignOutButton } from './SignOutButton'
import { useRanking } from '~/hooks/useRanking'
import { LevelProgress } from './LevelProgress'
import { PointsChart } from './PointsChart'
import { ScrollView } from 'react-native'

export const Profile = () => {
  const { userData } = useAuth()
  const { userRankingPosition, isLoadingRanking } = useRanking(userData.id)

  return (
    <Background>
      <ScrollView>
        <SignOutButton />

        <S.ImageProfile>
          <Avatar size={140} imageUrl={userData.avatarUrl} isHighlighted />
          <S.Level>lvl. {userData.level}</S.Level>
        </S.ImageProfile>

        <S.Username>{userData.name}</S.Username>

        <LevelProgress />

        <S.CardsContainer>
          <DataCard title={userData.points} description="pontos" />
          <DataCard title={userData.time} description="minutos" />
          <DataCard
            title={`#${isLoadingRanking ? '...' : userRankingPosition}`}
            description="no ranking"
          />
        </S.CardsContainer>

        <PointsChart />
      </ScrollView>
    </Background>
  )
}
