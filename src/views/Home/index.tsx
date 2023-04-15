import { useNavigation } from '@react-navigation/native'
import * as S from './styles'
import { Background } from '~/components/Background'

import QrCode from '~/core/assets/icons/qr-code.svg'

export const Home = () => {
  const { navigate } = useNavigation<any>()

  const handleOpenCamera = () => {
    navigate('QRCodeCamera')
  }

  return (
    <Background>
      <S.ScanQrCode width={250} height={250} />
      <S.Title>Leia o QR Code para registrar sua atividade!</S.Title>

      <S.Subtitle>
        Conecte seu dispositivo apontando a câmera para o QR Code.
      </S.Subtitle>

      <S.Button
        label="Conectar dispositivo"
        Icon={QrCode}
        onPress={handleOpenCamera}
      />
    </Background>
  )
}
