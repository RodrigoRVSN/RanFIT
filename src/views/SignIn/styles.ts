import styled, { css } from "styled-components/native";
import { Button as CustomButton } from "../../components/Button";

export const CommonStyles = css`
  font-family: ${({ theme }) => theme.fontFamily.text};
  margin-top:  ${({ theme }) => theme.spacing.xxlarge};
  text-align: center;
`

export const Title = styled.Text`
  ${CommonStyles}
  font-size: 24px;
`

export const Subtitle = styled.Text`
  ${CommonStyles}
  font-size: 12px;
  line-height: 26px;
`

export const Button = styled(CustomButton)`
  margin-top:  ${({ theme }) => theme.spacing.xxxxlarge};
`