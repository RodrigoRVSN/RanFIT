import { IUser } from './AuthContext.types'
import { FIREBASE_DB } from '~/core/firebase/config'
import { doc, getDoc, setDoc } from '@firebase/firestore'

export const createUserIfNotExists = async (user: IUser) => {
  const userData: IUser = {
    id: user.id,
    name: user.name,
    picture: user.picture,
    energy: 0,
    level: 0,
    time: 0
  }

  const userAlreadyExists = (
    await getDoc(doc(FIREBASE_DB, 'users', user.id))
  ).exists()
  !userAlreadyExists &&
    (await setDoc(doc(FIREBASE_DB, 'users', user.id), userData))
}
