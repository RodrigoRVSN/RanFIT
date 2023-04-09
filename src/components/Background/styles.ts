import styled from 'styled-components/native'

export const Background = styled.SafeAreaView`
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: ${({ theme }) => theme.spacing.giant}
    ${({ theme }) => theme.spacing.xlarge} 0;
`
