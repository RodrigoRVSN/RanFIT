import * as S from './styles'

type DataCardProps = {
  title: string | number
  description: string
}

export const DataCard = ({ title, description }: DataCardProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  )
}
