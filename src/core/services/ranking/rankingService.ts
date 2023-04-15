import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { IUser } from '~/contexts/AuthContext/AuthContext.types'
import { FIREBASE_DB } from '~/core/firebase/config'

export const getRanking = async (): Promise<IUser[]> => {
  const usersRef = collection(FIREBASE_DB, 'users')
  const queryPoints = query(usersRef, orderBy('points', 'desc'))
  const users = await getDocs(queryPoints)

  return users.docs.map((doc) => doc.data() as IUser)
}
