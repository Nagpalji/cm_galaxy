import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const LinkedinRoutes = [
    {
        path: '/linkedin-performance',
        component: lazy(() => import('../../views/linkedin-performance/linkedin/index')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default LinkedinRoutes
