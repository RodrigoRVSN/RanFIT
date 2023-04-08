import * as S from "./styles";
import { Background } from "../../components/Background";

import ScanQrCode from '../../core/assets/images/scan-qr-code.svg'
import QrCode from '../../core/assets/icons/qr-code.svg'

export const Home = () => {
  return (
    <Background>
      <ScanQrCode width={250} height={250} />
      <S.Title>Leia o QR Code para registrar sua atividade!</S.Title>

      <S.Subtitle>Conecte seu dispositivo apontando a câmera para o QR Code.</S.Subtitle>

      <S.Button
        label="Conectar dispositivo"
        Icon={QrCode}
        onPress={() => console.log('open camera')}
      />
    </Background>
  )
}