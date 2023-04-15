import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Text } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Background } from '~/components/Background'

import * as S from './styles'
import { useNavigation } from '@react-navigation/native'

export const QRCodeCamera = () => {
  const { navigate } = useNavigation()

  const handleBarCodeScanned = ({ data }) => {
    // use the data returned to send a post request passing the user id to connnect the deivce
    console.log(data)
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      await BarCodeScanner.requestPermissionsAsync()
    }

    getBarCodeScannerPermissions()
  }, [])

  return (
    <Background>
      <S.QRCodeScanner onBarCodeScanned={handleBarCodeScanned} />

      <S.Instruction>Aponte a câmera para o QR Code</S.Instruction>
    </Background>
  )
}
