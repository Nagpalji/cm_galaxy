// ** React Imports
import { Fragment } from 'react'

// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import DropdownNotification from './DropdownNotification'
// DateRangePicker start
import DateRangePicker from './DateRangePicker'
import '@styles/react/libs/flatpickr/flatpickr.scss'
import CustomDropDown from "./CustomDropDown"
// ** Custom Components
import NavbarBookmarks from './NavbarBookmarks'

// ** Third Party Components
import { Sun, Moon, Bell } from 'react-feather'
import { NavItem, NavLink, Row, Col, Card, CardHeader, CardTitle } from 'reactstrap'

const ThemeNavbar = props => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }
  if (location.pathname === '/dashboard/ecommerce') {
    const x = 'Overall Snapshot'
  }
  const pathname = props.location
  const pathToTitleMap = {
    "/overall-snapshot": "Overall Snapshot",
    "/dashboard/ecommerce": "Google Performance",
    "/facebook-performance":(localStorage.getItem("email") === 'globallogic@cmrsl.net') ? "Instagram Performance" : "Facebook Performance",
    // "/facebook-performance": "Facebook Performance",
    "/linkedin-performance": "LinkedIn Performance",
    "/youtube-performance": "Youtube Performance",
    "/amazon-performance": "Google Performance",
    "/twitter-performance": "Google Performance",
    "/dv360-performance": "DV360 Performance",
    "/lead-management": "Lead Management"

  }
  // const nam = sessionStorage.getItem("nam")
  return (

    <Fragment>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <NavbarBookmarks setMenuVisibility={setMenuVisibility} />
        <CardTitle className='mt-20 mobilefontsize' tag='h4'>{pathToTitleMap[location.pathname]}</CardTitle>

        {/* <CardTitle className='mt-20 mobilefontsize' tag='h4'>{location.pathname}</CardTitle>  */}
      </div>

      <ul className='nav navbar-nav align-items-center ml-auto'>
        {/* <IntlDropdown /> */}

        <NavItem className='d-none d-lg-block'>
          <NavLink className='nav-link-style'>
            {/* <ThemeToggler /> */}
            {/* <DateRangePicker /> */}
          </NavLink>
        </NavItem>
        <Row className="d-none d-lg-block match-height">
          <Col className="CustomDropDownWidth" xl="12" md="12" xs="12">
            <CustomDropDown />
          </Col>
        </Row>
        <Row className='d-none d-lg-block match-height'>
          <Col className='widthdate' xl='12' md='12' xs='12'>
            <DateRangePicker />
          </Col>
        </Row>
        
        {/* <Bell /> */}
        {/* <NavbarSearch /> */}
        {/* <CartDropdown /> */}
        <DropdownNotification />
        {/* <NotificationDropdown className='spacing' /> */}
        <UserDropdown />
      </ul>
    </Fragment>
  )
}

export default ThemeNavbar