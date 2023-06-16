import { useFocusEffect } from '@react-navigation/native'
import { useCallback, useMemo, useState } from 'react'
import { IUser } from '~/contexts/AuthContext/AuthContext.types'
import { getRanking } from '~/core/services/ranking/rankingService'

export const useRanking = (userId?: string) => {
  const [usersRanking, setUsersRanking] = useState<IUser[]>([])
  const [isLoadingRanking, setIsLoadingRanking] = useState(true)

  const userRankingPosition = useMemo(() => {
    const userPosition = usersRanking.findIndex((user) => user.id === userId)
    return userPosition + 1
  }, [userId, usersRanking])

  const handleGetRanking = useCallback(async () => {
    const users = await getRanking()

    setUsersRanking(users)
    setIsLoadingRanking(false)
  }, [])

  useFocusEffect(
    useCallback(() => {
      handleGetRanking()
    }, [])
  )

  return { isLoadingRanking, usersRanking, userRankingPosition }
}
