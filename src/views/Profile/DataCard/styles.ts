import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing.xsmall};
  border-width: 1px;
  display: flex;
  max-width: 103px;
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.small}`};
  width: 100%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 16px;
  line-height: 26px;
`

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 12px;
  line-height: 18px;
`
