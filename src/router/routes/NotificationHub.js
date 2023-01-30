import { lazy } from 'react'

const NotificationHubRoutes = [
  // Dashboards
  {
    path: '/notificationhub',
    component: lazy(() =>  import('../../@core/layouts/components/navbar/NotificationHub'))
  }
]

export default NotificationHubRoutes