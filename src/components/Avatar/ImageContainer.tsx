import { LinearGradient } from 'expo-linear-gradient'
import { ReactNode } from 'react'
import { theme } from '~/core/styles/theme'

type ImageContainerProps = {
  children: ReactNode
  isHighlighted: boolean
  size: number
}

export const ImageContainer = ({
  children,
  isHighlighted,
  size
}: ImageContainerProps) => {
  if (!isHighlighted) return <>{children}</>

  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.secondary]}
      style={{ borderRadius: size / 2, padding: 4 }}
    >
      {children}
    </LinearGradient>
  )
}
