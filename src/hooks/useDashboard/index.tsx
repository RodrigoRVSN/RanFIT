import { useCallback, useEffect, useState } from 'react'
import { useAuth } from '~/contexts/AuthContext'
import { getDashboard } from '~/core/services/users/getDashboard'

type DashboardDataType = {
  points: number[]
  dates: string[]
}

export const useDashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardDataType>({
    dates: [],
    points: []
  })

  const { userData } = useAuth()

  const handleGetDashboard = useCallback(async () => {
    const { dates, points } = await getDashboard(userData.id)

    setDashboardData({ dates, points })
    setIsLoading(false)
  }, [])

  useEffect(() => {
    handleGetDashboard()
  }, [])

  return { isLoading, dashboardData }
}
