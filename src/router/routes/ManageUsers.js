import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
 
const UserRoutes = [
  {
    path: '/manage-user/user/list',
    component: lazy(() => import('../../views/manage-user/user/list')),
    meta: {
      menuCollapsed: true
    }
  },
  {
    path: '/manage-user/user/edit',
    exact: true,
    component: () => <Redirect to='/manage-user/user/edit/1' />
  },
  {
    path: '/manage-user/user/edit/:id',
    component: lazy(() => import('../../views/manage-user/user/edit')),
    meta: {
      menuCollapsed: true
    }
  }
]

export default UserRoutes
