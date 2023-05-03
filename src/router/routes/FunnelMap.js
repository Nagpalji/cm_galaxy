import { lazy } from 'react'

const FunnelMapRoutes = [
  // Dashboards
  {
    path: '/funnelmap/index',
    component: lazy(() =>  import('../../views/funnelmap/'))
  },
  {
    path: '/funnelmap/viewdetails/',
    component: lazy(() => import('../../views/funnelmap/FunnelMapDetails'))
  }
]

export default FunnelMapRoutes
