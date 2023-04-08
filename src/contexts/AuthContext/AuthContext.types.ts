import { ReactNode } from "react"

export type IUser = {
  id: string
  name: string
  email: string
  picture: string
}

export type AuthContextProps = {
  userInfo: IUser
  onGoogleSignIn: () => void
}

export type AuthProviderProps = {
  children: ReactNode
}