import { Dimensions } from 'react-native'
import { theme } from '~/core/styles/theme'
import * as S from './styles'
import { LineChart } from 'react-native-chart-kit'

export const PointsChart = () => {
  return (
    <S.ChartContainer>
      <LineChart
        data={{
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get('window').width - 32} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: theme.colors.primary,
          backgroundGradientFrom: theme.colors.background,
          backgroundGradientTo: theme.colors.primary,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
          propsForDots: {
            r: '5',
            strokeWidth: '4',
            stroke: theme.colors.secondary
          }
        }}
        style={{
          borderRadius: 16
        }}
        bezier
      />
    </S.ChartContainer>
  )
}
