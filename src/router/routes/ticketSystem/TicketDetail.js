import { lazy } from 'react'

const TicketDetailRoutes = [
  // Dashboards
  {
    path: '/ticket/ticketDetails/TicketDetail',
    component: lazy(() =>  import('../../../views/ticket/ticketDetails/TicketDetail')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/Permissions/index',
    component: lazy(() =>  import('../../../views/Permissions/index'))
  }
]

export default TicketDetailRoutes