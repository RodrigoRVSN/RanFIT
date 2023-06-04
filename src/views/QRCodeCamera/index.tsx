import { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Background } from '~/components/Background'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { connectDevice } from '~/core/services/users/connectDevice'
import { useAuth } from '~/contexts/AuthContext'

export const QRCodeCamera = () => {
  const [isScanned, setIsScanned] = useState(false)

  const { userData } = useAuth()
  const { replace } = useNavigation<any>()

  const handleBarCodeScanned = async ({ data }) => {
    setIsScanned(true)
    await connectDevice(data, userData.id)
    replace('ScreenSaver', { deviceUrl: data })
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
