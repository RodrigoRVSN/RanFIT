import styled from 'styled-components/native'
import { Button as CustomButton } from '~/components/Button'
import AppScanQrCode from '~/core/assets/images/scan-qr-code.svg'

export const ScanQrCode = styled(AppScanQrCode)`
  align-self: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  margin-top: ${({ theme }) => theme.spacing.giant};
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`

export const Button = styled(CustomButton)`
  margin-top: ${({ theme }) => theme.spacing.giant};
  width: 100%;
`
