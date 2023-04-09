import styled from 'styled-components/native'

export const Image = styled.Image<{ size: number }>`
  border-radius: ${({ size }) => size / 2}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`
