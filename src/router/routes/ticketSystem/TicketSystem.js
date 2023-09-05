import { lazy } from 'react'

const TicketSystemRoutes = [
  // Dashboards
  {
    path: '/ticket/index',
    component: lazy(() =>  import('../../../views/ticket')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/Permissions/index',
    component: lazy(() =>  import('../../../views/Permissions/index'))
  }
]

export default TicketSystemRoutes