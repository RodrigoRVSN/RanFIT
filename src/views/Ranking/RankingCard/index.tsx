import { Avatar } from '~/components/Avatar'
import * as S from './styles'
import { IUser } from '~/contexts/AuthContext/AuthContext.types'

type RankingCardProps = {
  user: IUser
  position: number
}

export const RankingCard = ({ user, position }: RankingCardProps) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <Avatar size={64} imageUrl={user.avatarUrl} />
        <S.Position position={position}>{position}</S.Position>
      </S.ImageContainer>

      <S.Username>{user.name}</S.Username>

      <S.DetailsContainer>
        <S.Details>{user.points} pontos</S.Details>
        <S.Details>{user.power} watts</S.Details>
      </S.DetailsContainer>
    </S.Container>
  )
}
