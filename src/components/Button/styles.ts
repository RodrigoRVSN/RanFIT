import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.base};
  align-items: center;
`

export const Button = styled(RectButton)`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.spacing.base} ${({ theme }) => theme.spacing.xxlarge};
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.text};
  line-height: 16px;
`