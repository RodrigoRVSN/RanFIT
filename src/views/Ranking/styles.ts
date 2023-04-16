import styled from 'styled-components/native'

export const Title = styled.Text`
  border-bottom-left-radius: ${({ theme }) => theme.spacing.xxlarge};
  border-bottom-right-radius: ${({ theme }) => theme.spacing.xxlarge};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 32px;
  line-height: 38px;
  margin-bottom: ${({ theme }) => theme.spacing.xxlarge};
  text-align: center;
`
