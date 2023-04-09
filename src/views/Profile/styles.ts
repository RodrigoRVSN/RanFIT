import styled from 'styled-components/native'

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`
