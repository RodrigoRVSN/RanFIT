import { Avatar } from '~/components/Avatar'

import * as S from './styles'
import { IUser } from '~/contexts/AuthContext/AuthContext.types'

type HighlightedUserProps = {
  user: IUser
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
