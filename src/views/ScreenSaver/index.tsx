import React from 'react'
import { Background } from '~/components/Background'

import * as S from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Button } from '~/components/Button'
import { connectDevice } from '~/core/services/users/connectDevice'

type RouteParams = {
  deviceUrl: string
}

export const ScreenSaver = () => {
  const { replace } = useNavigation<any>()

  const route = useRoute()
  const { deviceUrl } = route.params as RouteParams

  const handleExit = async () => {
    await connectDevice(deviceUrl, '')
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
