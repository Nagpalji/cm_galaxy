// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { User, Mail, CheckSquare, MessageSquare, Settings, CreditCard, HelpCircle, Power } from 'react-feather'

// icon
import { FaPowerOff, FaUserAlt } from "react-icons/fa"

// ** Default Avatar Image
// import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import defaultAvatar from '@src/assets/images/avatars/logindemo.png'

const UserDropdown = () => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])
  let level
  if ((localStorage.getItem('level') === ("Superadmin")) || (localStorage.getItem('level') === ("Manager"))) {
    level = localStorage.getItem('level')
  } else {
    level = "Advertiser"
  }
  
  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar
  if (((localStorage.getItem('email')) === ("gauravg@cmrsl.net")) || ((localStorage.getItem('email')) === ('admin@cmrsl.net')) || ((localStorage.getItem('email')) === ('dhavalg@cmrsl.net'))) {
    return (
      <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
        <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
          <div className='user-nav d-sm-flex d-none'>
            <span className='user-name font-weight-bold'>{localStorage.getItem('user_name')}</span>
            <span className='user-status'>{(userData && level) || localStorage.getItem('level')}</span>
          </div>
          {/* <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' /> */}
           <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
        </DropdownToggle>
        <DropdownMenu right>
          {/* 51-54 for user dropdown */}
          <DropdownItem tag={Link} to='/apps/user/list'>
            <FaUserAlt size={14} className='mr-75' />
            <span className='align-middle'>User</span>
          </DropdownItem>
          {/* <DropdownItem tag={Link} to='/apps/email'>
            <Mail size={14} className='mr-75' />
            <span className='align-middle'>Inbox</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/apps/todo'>
            <CheckSquare size={14} className='mr-75' />
            <span className='align-middle'>Tasks</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/apps/chat'>
            <MessageSquare size={14} className='mr-75' />
            <span className='align-middle'>Chats</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to='/pages/account-settings'>
            <Settings size={14} className='mr-75' />
            <span className='align-middle'>Settings</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/pages/pricing'>
            <CreditCard size={14} className='mr-75' />
            <span className='align-middle'>Pricing</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/pages/faq'>
            <HelpCircle size={14} className='mr-75' />
            <span className='align-middle'>FAQ</span>
          </DropdownItem> */}
          <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
            <FaPowerOff  size={25} className='mr-75' />
            <span className='align-middle'>Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  } else {
    return (
      <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
        <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
          <div className='user-nav d-sm-flex d-none'>
            <span className='user-name font-weight-bold' data-toggle="tooltip" data-placement="top" title={localStorage.getItem('user_name')}>{localStorage.getItem('user_name').length <= 22 ? localStorage.getItem('user_name') : `${localStorage.getItem('user_name').substring(0, 20)} ...`}</span>
            <span className='user-status'>{(userData && level) || localStorage.getItem('level')}</span>
          </div>
          {/* <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' /> */}
           <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
        </DropdownToggle>
        <DropdownMenu right>
          {/* 51-54 for user dropdown */}
          {/* <DropdownItem tag={Link} to='/apps/user/list'>
            <FaUserAlt size={14} className='mr-75' />
            <span className='align-middle'>User</span>
          </DropdownItem> */}
          {/* <DropdownItem tag={Link} to='/apps/email'>
            <Mail size={14} className='mr-75' />
            <span className='align-middle'>Inbox</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/apps/todo'>
            <CheckSquare size={14} className='mr-75' />
            <span className='align-middle'>Tasks</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/apps/chat'>
            <MessageSquare size={14} className='mr-75' />
            <span className='align-middle'>Chats</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to='/pages/account-settings'>
            <Settings size={14} className='mr-75' />
            <span className='align-middle'>Settings</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/pages/pricing'>
            <CreditCard size={14} className='mr-75' />
            <span className='align-middle'>Pricing</span>
          </DropdownItem>
          <DropdownItem tag={Link} to='/pages/faq'>
            <HelpCircle size={14} className='mr-75' />
            <span className='align-middle'>FAQ</span>
          </DropdownItem> */}
          <DropdownItem tag={Link} to='/login' onClick={() => dispatch(handleLogout())}>
            <FaPowerOff  size={25} className='mr-75' />
            <span className='align-middle'>Logout</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
  
}

export default UserDropdown
