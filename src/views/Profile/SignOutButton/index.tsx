import { Entypo } from '@expo/vector-icons'
import { theme } from '~/core/styles/theme'
import * as S from './styles'
import { useAuth } from '~/contexts/AuthContext'

export const SignOutButton = () => {
  const { onSignOut } = useAuth()

  return (
    <S.Button onPress={onSignOut}>
      <Entypo name="log-out" size={24} color={theme.colors.secondary} />
    </S.Button>
  )
}
