import styled from 'styled-components/native'
import { Button as CustomButton } from '~/components/Button'
import AppLogo from '~/core/assets/images/logo.svg'

export const Logo = styled(AppLogo)`
  align-self: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  font-size: 32px;
  text-align: center;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`

export const Button = styled(CustomButton)`
  margin-top: ${({ theme }) => theme.spacing.giant};
  width: 100%;
`
