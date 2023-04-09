import { ReactNode } from 'react'
import * as S from './styles'

type BackgroundProps = {
  children: ReactNode
}

export const Background = ({ children }: BackgroundProps) => {
  return <S.Background>{children}</S.Background>
}
