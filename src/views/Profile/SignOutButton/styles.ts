import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: ${({ theme }) => theme.spacing.xxlarge};
  top: ${({ theme }) => theme.spacing.giant};
`
