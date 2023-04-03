import { lazy } from 'react'

const PushNotificationRoutes = [
  // Dashboards
  {
    path: '/pushnotification/index',
    component: lazy(() =>  import('../../views/pushNotification/'))
  },
  {
    path: '/Permissions/index',
    component: lazy(() =>  import('../../views/./Permissions/index'))
  }
]

export default PushNotificationRoutes