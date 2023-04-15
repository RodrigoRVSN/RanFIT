import { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Background } from '~/components/Background'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export const QRCodeCamera = () => {
  const [isScanned, setIsScanned] = useState(false)
  const { replace } = useNavigation<any>()

  const handleBarCodeScanned = ({ data }) => {
    setIsScanned(true)
    // TODO: use the data returned to send a post request passing the user id to connnect the deivce
    console.log(data)
    replace('ScreenSaver')
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      await BarCodeScanner.requestPermissionsAsync()
    }

    getBarCodeScannerPermissions()
  }, [])

  return (
    <Background>
      <S.QRCodeScanner
        onBarCodeScanned={isScanned ? undefined : handleBarCodeScanned}
      />

      <S.Instruction>Aponte a câmera para o QR Code</S.Instruction>
    </Background>
  )
}
