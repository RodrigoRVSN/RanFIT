import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '~/contexts/AuthContext'
import { getDashboard } from '~/core/services/users/getDashboard'

type DashboardDataType = {
  points: number[]
  dates: string[]
}

export const useDashboard = () => {
  const [dashboardData, setDashboardData] = useState<DashboardDataType>({
    dates: [],
    points: []
  })
  const [isLoadingRanking, setIsLoadingRanking] = useState(true)
  const { userData } = useAuth()

  const handleGetDashboard = useCallback(async () => {
    const { dates, points } = await getDashboard(userData.id)
    setDashboardData({ dates, points })
    setIsLoadingRanking(false)
  }, [])

  useEffect(() => {
    handleGetDashboard()
  }, [])

  return { isLoadingRanking, dashboardData }
}
