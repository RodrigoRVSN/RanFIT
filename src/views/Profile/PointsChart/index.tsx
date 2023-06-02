import { Dimensions } from 'react-native'
import { theme } from '~/core/styles/theme'
import * as S from './styles'
import { LineChart } from 'react-native-chart-kit'
import { useDashboard } from '~/hooks/useDashboard'

export const PointsChart = () => {
  const { dashboardData } = useDashboard()

  return (
    <S.ChartContainer>
      <LineChart
        data={{
          labels: dashboardData.dates,
          datasets: [
            {
              data: dashboardData.points
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
