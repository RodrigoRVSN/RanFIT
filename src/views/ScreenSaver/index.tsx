import React from 'react'
import { Background } from '~/components/Background'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { Button } from '~/components/Button'

export const ScreenSaver = () => {
  const { replace } = useNavigation<any>()

  const handleExit = () => {
    // TODO: implement here the device disconnect
    replace('HomeTab')
  }

  return (
    <Background>
      <S.Title>Você está conectado(a)!</S.Title>

      <S.Lottie
        autoPlay
        source={require('../../core/assets/animations/exercise.json')}
      />

      <S.KeepGoing>
        Pratique atividades físicas no dispositivo conectado para acumular
        pontos!
      </S.KeepGoing>

      <Button label="Desconectar" onPress={handleExit} />
    </Background>
  )
}
