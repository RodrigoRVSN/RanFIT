import * as S from './styles'
import { Background } from '~/components/Background'
import { RankingCard } from './RankingCard'
import { ActivityIndicator, FlatList } from 'react-native'
import { HighlightedUser } from './HighlightedUser'
import { useRanking } from '~/hooks/useRanking'

export const Ranking = () => {
  const { usersRanking, isLoadingRanking } = useRanking()

  return (
    <Background>
      <S.Title>Ranking</S.Title>

      {isLoadingRanking ? (
        <ActivityIndicator size={64} style={{ flex: 1 }} />
      ) : (
        <FlatList
          ListHeaderComponent={<HighlightedUser user={usersRanking[0]} />}
          data={usersRanking}
          renderItem={({ item, index }) =>
            index > 0 && <RankingCard user={item} position={index + 1} />
          }
        />
      )}
    </Background>
  )
}
