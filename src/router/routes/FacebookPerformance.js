import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const FacebookRoutes = [
    {
        path: '/facebook-performance',
        component: lazy(() => import('../../views/facebook-performance/facebook')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default FacebookRoutes
