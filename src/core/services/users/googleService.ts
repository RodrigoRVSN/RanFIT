import { IUser } from '~/contexts/AuthContext/AuthContext.types'

export type ProviderUser = IUser & { picture: string }

export const getGoogleProfile = async (
  token: string
): Promise<ProviderUser> => {
  const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
    headers: { Authorization: `Bearer ${token}` }
  })

  return response.json()
}
