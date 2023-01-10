import { lazy } from 'react'

const FunnelMappingRoutes = [
  // Dashboards
  {
    path: '/funnelmapping/index',
    component: lazy(() =>  import('../../views/funnelmapping/'))
  },
  {
    path: '/funnelmapping/viewdetails/',
    component: lazy(() => import('../../views/funnelmapping/FunnelMappingDetails'))
  }
]

export default FunnelMappingRoutes
