import { ActivityIndicator, Dimensions } from 'react-native'
import { theme } from '~/core/styles/theme'
import * as S from './styles'
import { LineChart } from 'react-native-chart-kit'
import { useDashboard } from '~/hooks/useDashboard'

export const PointsChart = () => {
  const { isLoading, dashboardData } = useDashboard()

  const graphWidth = Dimensions.get('window').width - 32

  return (
    <S.ChartContainer>
      {isLoading ? (
        <ActivityIndicator size={64} style={{ flex: 1 }} />
      ) : (
        <LineChart
          data={{
            labels: dashboardData.dates,
            datasets: [
              {
                data: dashboardData.points
              }
            ]
          }}
          width={graphWidth}
          height={420}
          verticalLabelRotation={90}
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
      )}
    </S.ChartContainer>
  )
}
