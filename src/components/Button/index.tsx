import { FC } from "react"
import { RectButtonProps } from "react-native-gesture-handler"
import { SvgProps } from "react-native-svg"

import * as S from './styles'

interface ButtonProps {
  label: string
  Icon?: FC<SvgProps>
  onPress: () => void
}

export const Button = ({ label, Icon, onPress, ...rest }: ButtonProps) => {
  return (
    <S.ButtonContainer {...rest}>
      <S.Button onPress={onPress}>
        {Icon && <Icon width={32} height={32} />}

        <S.Label>{label}</S.Label>
      </S.Button>
    </S.ButtonContainer>
  )
}