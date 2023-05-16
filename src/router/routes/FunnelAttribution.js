import { lazy } from 'react'

const FunnelAttributionRoutes = [
  // Dashboards
  {
    path: '/funnelAttribution/index',
    component: lazy(() =>  import('../../views/funnelAttribution')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/funnelAttribution/viewdetails/',
    component: lazy(() => import('../../views/funnelAttribution/FunnelAttributionDetails'))
  }
]

export default FunnelAttributionRoutes
