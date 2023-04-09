import styled from 'styled-components/native'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 32px;
  line-height: 38px;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 20px;
  line-height: 24px;
  margin-top: ${({ theme }) => theme.spacing.xsmall};
`

export const Points = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 14px;
  line-height: 20px;
`
