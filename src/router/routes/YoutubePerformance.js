import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const YoutubeRoutes = [
    {
        path: '/youtube-performance',
        component: lazy(() => import('../../views/youtube-performance/youtube')),
        meta: {
          menuCollapsed: true
        }
    }
]

export default YoutubeRoutes
