import { Avatar } from '~/components/Avatar'
import { rankingUsersMock } from './Ranking.mock'
import * as S from './styles'
import { Background } from '~/components/Background'

export const Ranking = () => {
  const highlightedUser = rankingUsersMock[0]

  return (
    <Background>
      <S.Title>Ranking</S.Title>

      <Avatar size={134} isHighlighted imageUrl={highlightedUser.avatar} />
      <S.Username>{highlightedUser.name}</S.Username>
      <S.Points>{highlightedUser.energy} mV gerados</S.Points>
    </Background>
  )
}
