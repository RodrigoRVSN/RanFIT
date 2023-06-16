import { ReactNode } from 'react'

export type IUser = {
  id: string
  name: string
  avatarUrl: string
  points: number
  time: number
  level: number
  currentExperience: number
  experienceToLevelUp: number
}

export type AuthContextProps = {
  userData: IUser
  onGoogleSignIn: () => void
  isLoading: boolean
  isLoadingStorage: boolean
  onSignOut: () => void
  updateUser: () => Promise<void>
}

export type AuthProviderProps = {
  children: ReactNode
}
