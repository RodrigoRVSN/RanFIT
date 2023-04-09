import { Avatar } from '~/components/Avatar'
import { rankingUsersMock } from './Ranking.mock'
import * as S from './styles'
import { Background } from '~/components/Background'
import { RankingCard } from './RankingCard'
import { FlatList } from 'react-native'
import { HighlightedUser } from './HighlightedUser'

export const Ranking = () => {
  return (
    <Background>
      <S.Title>Ranking</S.Title>

      <FlatList
        ListHeaderComponent={<HighlightedUser user={rankingUsersMock[0]} />}
        data={rankingUsersMock}
        renderItem={({ item, index }) =>
          index > 0 && <RankingCard user={item} position={index + 1} />
        }
      />
    </Background>
  )
}
