// // ** React Imports
// import { Link } from 'react-router-dom'

// // ** Custom Components
// import Avatar from '@components/avatar'

// // ** Store & Actions
// import { getUser, deleteUser } from '../store/action'
// import { store } from '@store/storeConfig/store'

// // ** Third Party Components
// import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// // icon
// import { FaUserEdit, FaTrash } from "react-icons/fa"
// // ** Renders Client Columns
// const renderClient = row => {
//   const stateNum = Math.floor(Math.random() * 6),
//     states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
//     color = states[stateNum]

//   if (row.avatar.length) {
//     return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
//   } else {
//     return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
//   }
// }

// // ** Renders Role Columns
// // const renderRole = row => {
// //   const roleObj = {
// //     subscriber: {
// //       class: 'text-primary',
// //       icon: User
// //     },
// //     maintainer: {
// //       class: 'text-success',
// //       icon: Database
// //     },
// //     editor: {
// //       class: 'text-info',
// //       icon: Edit2
// //     },
// //     author: {
// //       class: 'text-warning',
// //       icon: Settings
// //     },
// //     admin: {
// //       class: 'text-danger',
// //       icon: Slack
// //     }
// //   }

// //   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

// //   return (
// //     <span className='text-truncate text-capitalize align-middle'>
// //       <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
// //       {row.role}
// //     </span>
// //   )
// // }

// const statusObj = {
//   pending: 'light-warning',
//   active: 'light-success',
//   inactive: 'light-secondary'
// }

// export const columns = [
//   {
//     name: 'Advertiser',
//     minWidth: '120px',
//     selector: 'email',
//     sortable: true
//     // cell: row => row.email
//   },

//   {
//     name: 'User Name',
//     minWidth: '120px',
//     selector: 'email',
//     sortable: true
//     // cell: row => row.email
//   },
//   {
//     name: 'Brand Name',
//     minWidth: '120px',
//     selector: 'brand_name',
//     sortable: true
//     // cell: row => row.fullName
//   },
//   {
//     name: 'User Type',
//     minWidth: '120px',
//     selector: 'user_type',
//     sortable: true
//     // cell: row => (
//     //   <Badge className='text-capitalize' color={statusObj[row.user_type]} pill>
//     //     {row.status}
//     //   </Badge>
//     // )
//   },
//   {
//     name: 'Actions',
//     minWidth: '75px',
//     cell: row => (
//       <UncontrolledDropdown>
//         <DropdownToggle tag='div' className='btn btn-sm'>
//           <MoreVertical size={18} className='cursor-pointer' />
//         </DropdownToggle>
//         <DropdownMenu right>

//           <DropdownItem
//             tag={Link}
//             to={`/manage-user/user/edit/${row.id}`}
//             className='w-100'
//             onClick={() => store.dispatch(getUser(row.id))} >
//             <FaUserEdit size={20} className='mr-50' />
//             <span className='align-middle'>Edit User</span>
//           </DropdownItem>

//           <DropdownItem className='w-100' onClick={() => store.dispatch(deleteUser(row.id))}>
//             <FaTrash size={16} className='mr-50' />
//             <span className='align-middle'>Delete</span>
//           </DropdownItem>
//         </DropdownMenu>
//       </UncontrolledDropdown>
//     )
//   }
// ]
// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser, deleteUser } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// icon
import { FaUserEdit, FaTrash } from "react-icons/fa"
// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.fullName || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
// const renderRole = row => {
//   const roleObj = {
//     subscriber: {
//       class: 'text-primary',
//       icon: User
//     },
//     maintainer: {
//       class: 'text-success',
//       icon: Database
//     },
//     editor: {
//       class: 'text-info',
//       icon: Edit2
//     },
//     author: {
//       class: 'text-warning',
//       icon: Settings
//     },
//     admin: {
//       class: 'text-danger',
//       icon: Slack
//     }
//   }

//   const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

//   return (
//     <span className='text-truncate text-capitalize align-middle'>
//       <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
//       {row.role}
//     </span>
//   )
// }

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}
const dat = [
  {
    name:"hello"
  },
   {
    name:"hello2"
  },
    
  {name:"hello3"
}
]
export const columns = [
  {
    name: 'Advertisers',
    minWidth: '120px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'User Name',
    minWidth: '120px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Brand',
    minWidth: '120px',
    selector: 'brand_name',
    sortable: true,
    cell: row => row.brand_name
  },
  {
    name: 'User Type',
    minWidth: '120px',
    selector: 'user_type',
    sortable: true,
    cell: row => row.user_type
      // <Badge className='text-capitalize' color={statusObj[row.status]} pill>
      //   {row.status}
      // </Badge>
    
  },
  {
    name: 'Actions',
    minWidth: '75px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={18} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>

          <DropdownItem
            tag={Link}
            to={`/manage-user/user/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))} >
            <FaUserEdit size={20} className='mr-50' />
            <span className='align-middle'>Edit User</span>
          </DropdownItem>

          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteUser(row.id))}>
            <FaTrash size={16} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
