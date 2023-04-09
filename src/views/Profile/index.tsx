import * as S from './styles'
import { Background } from '~/components/Background'
import { useAuth } from '~/contexts/AuthContext'
import { Avatar } from '~/components/Avatar'
import { DataCard } from './DataCard'
import { SignOutButton } from './SignOutButton'

export const Profile = () => {
  const { userData } = useAuth()

  return (
    <Background>
      <SignOutButton />

      <S.ImageProfile>
        <Avatar size={140} imageUrl={userData.picture} isHighlighted />
        <S.Level>lvl. {userData.level}</S.Level>
      </S.ImageProfile>

      <S.Username>{userData.name}</S.Username>

      <S.CardsContainer>
        <DataCard title={userData.energy} description="mV gerados" />
        <DataCard title={userData.time} description="minutos" />
        {/* TODO: refine ranking */}
        <DataCard title="#1" description="no ranking" />
      </S.CardsContainer>
    </Background>
  )
}
