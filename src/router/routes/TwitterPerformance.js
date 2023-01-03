import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const TwitterRoutes = [
    {
        path: '/twitter-performance',
        component: lazy(() => import('../../views/twitter-performance/twitter')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default TwitterRoutes
