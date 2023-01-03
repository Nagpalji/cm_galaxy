import { lazy } from 'react'

const FunnelMappingRoutes = [
  // Dashboards
  {
    path: '/funnelmapping',
    component: lazy(() => import('../../views/funnelmapping'))
  }
]

export default FunnelMappingRoutes
