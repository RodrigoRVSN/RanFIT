import styled from 'styled-components/native'

export const ImageProfile = styled.View`
  align-items: center;
  display: flex;
  position: relative;
`

export const Level = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.xxsmall};
  bottom: -${({ theme }) => theme.spacing.xsmall};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.small}`};
  position: absolute;
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin: ${({ theme }) => theme.spacing.medium} 0 0;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`

export const CardsContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.xsmall};
  justify-content: center;
  width: 100%;
`
