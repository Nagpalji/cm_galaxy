import { lazy } from 'react'

const LMSRoutes = [
  // Dashboards
  {
    path: '/LMS/dashboard/analytics',
    component: lazy(() => import('../../views/lms/dashboard'))
  },
  {
    path: '/LMS/dashboard/accounts',
    component: lazy(() => import('../../views/lms/accounts'))
  }
]

export default LMSRoutes
