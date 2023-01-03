import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AmazonRoutes = [
    {
        path: '/amazon-performance',
        component: lazy(() => import('../../views/amazon-performance/amazon')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default AmazonRoutes
