import { lazy } from 'react'

const LMSRoutes = [
  // Dashboards
  {
    path: '/LMS/dashboard/analytics',
    component: lazy(() => import('../../views/lms/dashboard'))
  }
]

export default LMSRoutes
