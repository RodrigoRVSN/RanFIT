import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.base};
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
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 16px;
  line-height: 16px;
`