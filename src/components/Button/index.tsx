import { FC } from 'react'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'
import { ActivityIndicator } from 'react-native'

interface ButtonProps {
  label: string
  isLoading?: boolean
  Icon?: FC<SvgProps>
  onPress: () => void
}

export const Button = ({
  label,
  isLoading,
  Icon,
  onPress,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonContainer {...rest}>
      <S.Button onPress={() => onPress()} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size={32} />
        ) : (
          <>
            {Icon && <Icon width={32} height={32} />}
            <S.Label>{label}</S.Label>
          </>
        )}
      </S.Button>
    </S.ButtonContainer>
  )
}
