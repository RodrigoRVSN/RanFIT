import { Avatar } from '~/components/Avatar'
import { rankingUsersMock } from '../Ranking.mock'
import * as S from './styles'

type RankingCardProps = {
  user: (typeof rankingUsersMock)[0]
  position: number
}

export const RankingCard = ({ user, position }: RankingCardProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Avatar size={64} imageUrl={user.picture} />
        <S.Position position={position}>{position}</S.Position>
      </S.ImageContainer>

      <S.Username>{user.name}</S.Username>

      <S.DetailsContainer>
        <S.Details>{user.energy} mV</S.Details>
        <S.Details>{user.time} hrs</S.Details>
      </S.DetailsContainer>
    </S.Container>
  )
}
