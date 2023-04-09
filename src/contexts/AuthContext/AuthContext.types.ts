import { ReactNode } from 'react'

export type IUser = {
  id: string
  name: string
  picture: string
  energy: number
  time: number
  level: number
}

export type AuthContextProps = {
  userInfo: IUser
  onGoogleSignIn: () => void
  isLoading: boolean
}

export type AuthProviderProps = {
  children: ReactNode
}
