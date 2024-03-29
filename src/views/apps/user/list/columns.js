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
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} mr-50`} />
      {row.role}
    </span>
  )
}

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
// const var1 = "https://srvr1px.cyberads.io/deleter/?id="
// window.alert(row.id)
export const columns = [
  {
    name: 'User Name',
    minWidth: '220px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Brand Name',
    minWidth: '220px',
    selector: 'brand_name',
    sortable: true,
    cell: row => row.brand_name
  },
  
  // {
  //   name: 'User Name',
  //   minWidth: '180px',
  //   selector: 'fullName',
  //   sortable: true,
  //   cell: row => (
  //     <div className='d-flex justify-content-left align-items-center'>
  //       {renderClient(row)}
  //       <div className='d-flex flex-column'>
  //         <Link
  //           to={`/apps/user/view/${row.id}`}
  //           className='user-name text-truncate mb-0'
  //           onClick={() => store.dispatch(getUser(row.id))}
  //         >
  //           {/* <span className='font-weight-bold'>{row.fullName}</span> */}
  //         </Link>
  //         {/* <small className='text-truncate text-muted mb-0'>@{row.username}</small> */}
  //         <small className=''>@{row.username}</small>
  //       </div>
  //     </div>
  //   )
  // },
  // {
  //   name: 'Last Name',
  //   minWidth: '180px',
  //   selector: 'email',
  //   sortable: true,
  //   cell: row => row.fullName
  // },

  // {
  //   name: 'Email',
  //   minWidth: '220px',
  //   selector: 'email',
  //   sortable: true,
  //   cell: row => row.email
  // },
  // {
  //   name: 'Role',
  //   minWidth: '172px',
  //   selector: 'role',
  //   sortable: true,
  //   cell: row => renderRole(row)
  // },
  {
    name: 'User Type',
    minWidth: '160px',
    selector: 'User Type',
    sortable: true
    // cell: row => (
    //   <Badge className='text-capitalize' color={statusObj[row.UserType]} pill>
    //     {row.UserType}
    //   </Badge>
    // )
  },
  {
    name: 'Actions',
    minWidth: '75px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
        
          {/* <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem> */}
          

          <DropdownItem
            tag={Link}
            to={`/apps/user/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.id))} >
            <FaUserEdit size={20} className='mr-50' />
            <span className='align-middle'>Edit User</span>
          </DropdownItem>

          <DropdownItem className='w-100' onClick={() => store.dispatch(deleteUser(row.id))}>
          {/* <DropdownItem className='w-100' onClick={() => var1 + (row.id)}> */}
          <FaTrash size={16} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
