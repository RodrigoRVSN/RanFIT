import * as S from './styles'
import { ImageContainer } from './ImageContainer'

export type AvatarProps = {
  imageUrl: string
  isHighlighted?: boolean
  size: number
}

export const Avatar = ({
  imageUrl,
  isHighlighted = false,
  size
}: AvatarProps) => {
  return (
    <ImageContainer size={size} isHighlighted={isHighlighted}>
      <S.Image resizeMode="contain" source={{ uri: imageUrl }} size={size} />
    </ImageContainer>
  )
}
