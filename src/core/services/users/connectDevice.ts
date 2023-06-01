import { IUser } from '~/contexts/AuthContext/AuthContext.types'

export type ProviderUser = IUser & { picture: string }

export const connectDevice = async (connectionUrl: string, userId: string) => {
  return fetch(connectionUrl, {
    method: 'POST',
    body: JSON.stringify({ user_id: userId }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
