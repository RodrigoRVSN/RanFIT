import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export const ButtonContainer = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.xsmall};
`

export const Button = styled(TouchableOpacity)`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => `${theme.spacing.base} ${theme.spacing.xxlarge}`};
  width: 100%;
  justify-content: center;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 16px;
  line-height: 16px;
`
