import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const PerformanceRoutes = [
    {
        path: '/dv360-performance',
        component: lazy(() => import('../../views/dv360-performance/performance')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default PerformanceRoutes
