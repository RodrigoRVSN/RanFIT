import { IUser } from './AuthContext.types'
import { FIREBASE_DB } from '~/core/firebase/config'
import { doc, getDoc, setDoc } from '@firebase/firestore'
import { ProviderUser } from '~/core/services/users/googleService'

export const getUserById = (userId: string) => {
  return getDoc(doc(FIREBASE_DB, 'users', userId))
}

export const createUserIfNotExists = async (
  user: ProviderUser
): Promise<IUser> => {
  const newUserData: IUser = {
    id: user.id,
    name: user.name,
    avatarUrl: user.picture,
    points: 0,
    level: 0,
    time: 0
  }

  const userInDatabase = await getUserById(user.id)

  if (userInDatabase.exists()) {
    return userInDatabase.data() as IUser
  }

  await setDoc(doc(FIREBASE_DB, 'users', user.id), newUserData)
  return newUserData
}
