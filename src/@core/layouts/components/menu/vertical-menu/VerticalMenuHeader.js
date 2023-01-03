// ** React Imports
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// Logo component start
import img1 from '@src/assets/images/avatars/logo.png'
import { CardImg } from 'reactstrap'
// Logo component End

// ** Third Party Components
import { Disc, X, Circle } from 'react-feather'

// ** Config
import themeConfig from '@configs/themeConfig'

const VerticalMenuHeader = props => {
  // ** Props
  const { menuCollapsed, setMenuCollapsed, setMenuVisibility, setGroupOpen, menuHover } = props

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([])
  }, [menuHover, menuCollapsed])

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(true)}
        />
      )
    } else {
      return (
        <Circle
          size={20}
          data-tour='toggle-icon'
          className='text-primary toggle-icon d-none d-xl-block'
          onClick={() => setMenuCollapsed(false)}
        />
      )
    }
  }

  return (
    <div className='navbar-header'>
      <ul className='nav navbar-nav flex-row'>
        <li className='nav-item mr-auto'>
          <NavLink to='/' className='navbar-brand'>
            <span className='brand-logo'>
              <img className='width_logo_menu1' src={themeConfig.app.appLogoImage} alt='icon' />
              {/* <CardImg top src={img1} alt='card1' /> */}
            </span>
            {/* <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2> */}
            <img className='width_logo_menu2 brand-text mb-0' src={themeConfig.app.appLogo} alt='Logo' />
          </NavLink>
        </li>
        <li className='nav-item nav-toggle'>
          <div className='nav-link modern-nav-toggle cursor-pointer'>
            <Toggler />
            <X onClick={() => setMenuVisibility(false)} className='toggle-icon icon-x d-block d-xl-none' size={20} />
          </div>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMenuHeader
