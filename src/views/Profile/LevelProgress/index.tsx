import { useAuth } from '~/contexts/AuthContext'
import * as S from './styles'

export const LevelProgress = () => {
  const {
    userData: { currentExperience, experienceToLevelUp, level }
  } = useAuth()

  const levelPercentage = (currentExperience / experienceToLevelUp) * 100
  const percentage = levelPercentage > 100 ? 100 : levelPercentage

  return (
    <S.Container>
      <S.Title>Próximo nível</S.Title>

      <S.ProgressBarContainer>
        <S.ProgressBar percentage={percentage} />
      </S.ProgressBarContainer>

      <S.LevelContainer>
        <S.LevelInfo>
          <S.InfoEmphasis>XP {currentExperience}</S.InfoEmphasis>/
          {experienceToLevelUp}
        </S.LevelInfo>
        <S.LevelInfo>
          <S.InfoEmphasis>
            {experienceToLevelUp - currentExperience} xp
          </S.InfoEmphasis>{' '}
          para lvl. {level + 1}
        </S.LevelInfo>
      </S.LevelContainer>
    </S.Container>
  )
}
