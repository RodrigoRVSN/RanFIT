import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 20px;
  line-height: 24px;
  margin: ${({ theme }) => theme.spacing.xxxlarge} 0;
  text-align: center;
`

export const Lottie = styled(LottieView)`
  align-self: center;
  height: 250px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxlarge};
  width: 250px;
`

export const KeepGoing = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.xgiant};
  text-align: center;
`
