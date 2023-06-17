import { getDoc, doc } from 'firebase/firestore'
import { FIREBASE_DB } from '~/core/firebase/config'

type DataType = {
  points: number
  date: string
}

const OFFSET = 7

export const getDashboard = async (
  userId: string
): Promise<{
  dates: string[]
  points: number[]
}> => {
  const exercisesRef = doc(FIREBASE_DB, 'exercises', userId)
  const users = await getDoc(exercisesRef)
  const { data } = users.data()
  const lastSevenDays = data.slice(-OFFSET)

  const dates = lastSevenDays.map(
    (_, index: number) => data.length - OFFSET + index
  )
  const points = lastSevenDays.map((item: DataType) => item.points)

  return { dates, points }
}
