import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const LandingRoutes = [
    {
        path: '/index',
        component: lazy(() => import('../../views/landing-page/landing')),
        layout: 'BlankLayout',
        meta: {
            authRoute: true
        }
    }
]

export default LandingRoutes
