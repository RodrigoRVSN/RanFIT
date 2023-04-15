import styled from 'styled-components/native'

export const Container = styled.View`
  margin: ${({ theme }) => theme.spacing.large} 0;
`

export const ProgressBarContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.spacing.xsmall};
  height: ${({ theme }) => theme.spacing.base};
  position: relative;
  width: 100%;
`

export const ProgressBar = styled.View<{ percentage: number }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.spacing.xsmall};
  height: 100%;
  position: absolute;
  width: ${({ percentage }) => `${percentage}%`};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.title};
  font-size: 16px;
  line-height: 20px;
  margin-bottom: ${({ theme }) => theme.spacing.base};
  text-align: left;
`

export const LevelInfo = styled.Text`
  color: ${({ theme }) => theme.colors.gray100};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 12px;
  line-height: 18px;
`

export const InfoEmphasis = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`

export const LevelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.xxsmall};
`
