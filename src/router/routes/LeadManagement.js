import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const LeadRoutes = [
    {
        path: '/lead-management',
        component: lazy(() => import('../../views/lead-management/lead')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default LeadRoutes
