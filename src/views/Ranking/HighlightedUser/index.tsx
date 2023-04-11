import { Avatar } from '~/components/Avatar'
import { rankingUsersMock } from '../Ranking.mock'

import * as S from './styles'

type HighlightedUserProps = {
  user: (typeof rankingUsersMock)[0]
}

export const HighlightedUser = ({ user }: HighlightedUserProps) => {
  return (
    <S.Container>
      <Avatar size={134} isHighlighted imageUrl={user.avatarUrl} />
      <S.Username>{user.name}</S.Username>
      <S.Points>{user.energy} mV gerados</S.Points>
    </S.Container>
  )
}
