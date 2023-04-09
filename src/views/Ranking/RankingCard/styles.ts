import styled from 'styled-components/native'

const hexToRgb = (hex: string) => {
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, 0.05)`
}

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => hexToRgb(theme.colors.text)};
  border-radius: ${({ theme }) => theme.spacing.large};
  display: flex;
  flex-direction: row;
  height: 85px;
  margin-bottom: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.xsmall}`};
  width: 100%;
`

export const ImageContainer = styled.View`
  margin-right: ${({ theme }) => theme.spacing.small};
  position: relative;
`

export const Position = styled.Text<{ position: number }>`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.spacing.xxsmall};
  bottom: 0;
  color: ${({ theme, position }) =>
    position < 4 ? theme.colors.secondary : theme.colors.primary};
  font-size: 12px;
  line-height: 18px;
  padding: ${({ theme }) => `${theme.spacing.xxsmall} ${theme.spacing.xsmall}`};
  position: absolute;
  right: 0;
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: auto;
`

export const Details = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 14px;
  line-height: 20px;
`

export const DetailsContainer = styled.View`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xsmall};
  margin-left: auto;
`
