import { lazy } from 'react'

const PushNotificationRoutes = [
  // Dashboards
  {
    path: '/pushnotification/index',
    component: lazy(() =>  import('../../views/pushNotification/'))
  }
]

export default PushNotificationRoutes