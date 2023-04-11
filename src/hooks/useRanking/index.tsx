import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { IUser } from '~/contexts/AuthContext/AuthContext.types'
import { FIREBASE_DB } from '~/core/firebase/config'

export const useRanking = () => {
  const [usersRanking, setUsersRanking] = useState<IUser[]>([])
  const [isLoadingRanking, setIsLoadingRanking] = useState(true)

  const handleGetRanking = useCallback(async () => {
    const usersRef = collection(FIREBASE_DB, 'users')
    const queryPoints = query(usersRef, orderBy('energy', 'desc'))
    const users = await getDocs(queryPoints)

    setUsersRanking(users.docs.map((doc) => doc.data() as IUser))
    setIsLoadingRanking(false)
  }, [])

  useEffect(() => {
    handleGetRanking()
  }, [])

  return { isLoadingRanking, usersRanking }
}
