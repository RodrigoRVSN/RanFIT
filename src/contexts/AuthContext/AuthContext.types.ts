import { ReactNode } from 'react'

export type IUser = {
  id: string
  name: string
  avatarUrl: string
  points: number
  time: number
  level: number
}

export type AuthContextProps = {
  userData: IUser
  onGoogleSignIn: () => void
  isLoading: boolean
  isLoadingStorage: boolean
  onSignOut: () => void
}

export type AuthProviderProps = {
  children: ReactNode
}
