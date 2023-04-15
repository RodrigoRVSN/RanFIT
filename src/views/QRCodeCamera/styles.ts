import styled from 'styled-components/native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Dimensions } from 'react-native'

export const QRCodeScanner = styled(BarCodeScanner)`
  height: ${Dimensions.get('screen').height}px;
  position: absolute;
  width: ${Dimensions.get('screen').width}px;
`

export const Instruction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.text};
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`
