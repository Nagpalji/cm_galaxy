import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const SnapshotRoutes = [
    {
        path: '/overall-snapshot',
        component: lazy(() => import('../../views/overall-snapshot/snapshot')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default SnapshotRoutes
