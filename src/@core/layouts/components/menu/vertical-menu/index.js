// ** React Imports
import { Fragment, useState, useRef } from 'react'
import { Button } from 'reactstrap'
import { Search, Inbox, Camera, ExternalLink } from 'react-feather'

// ** Vertical Menu Items Array
import navigation from '@src/navigation/vertical'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Vertical Menu Components
import VerticalMenuHeader from './VerticalMenuHeader'
import VerticalNavMenuItems from './VerticalNavMenuItems'

// Button start
import button from './button'
// Button End

const Sidebar = props => {
  // ** Props
  const { menuCollapsed, routerProps, menu, currentActiveItem, skin } = props

  // ** States
  const [groupOpen, setGroupOpen] = useState([])
  const [groupActive, setGroupActive] = useState([])
  const [activeItem, setActiveItem] = useState(null)

  // ** Menu Hover State
  const [menuHover, setMenuHover] = useState(false)

  // ** Ref
  const shadowRef = useRef(null)

  // ** Function to handle Mouse Enter
  const onMouseEnter = () => {
    if (menuCollapsed) {
      setMenuHover(true)
    }
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    if (shadowRef && container.scrollTop > 0) {
      if (!shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.add('d-block')
      }
    } else {
      if (shadowRef.current.classList.contains('d-block')) {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  return (
    <Fragment>
      <div
        className={classnames('main-menu menu-fixed menu-accordion menu-shadow', {
          expanded: menuHover || menuCollapsed === false,
          'menu-light': skin !== 'semi-dark' && skin !== 'dark',
          'menu-dark': skin === 'semi-dark' || skin === 'dark'
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => setMenuHover(false)}
      >
        {menu ? (
          menu(props)
        ) : (
          <Fragment>
            {/* {/ Vertical Menu Header /} */}
            <VerticalMenuHeader setGroupOpen={setGroupOpen} menuHover={menuHover} {...props} />
            {/* {/ Vertical Menu Header Shadow /} */}
            <div className='shadow-bottom' ref={shadowRef}></div>
            {/* {/ Perfect Scrollbar /} */}
            <PerfectScrollbar
              className='main-menu-content'
              options={{ wheelPropagation: false }}
              onScrollY={container => scrollMenu(container)}
            >
              <ul className='navigation navigation-main'>
                <VerticalNavMenuItems
                  items={navigation}
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  groupOpen={groupOpen}
                  setGroupOpen={setGroupOpen}
                  routerProps={routerProps}
                  menuCollapsed={menuCollapsed}
                  menuHover={menuHover}
                  currentActiveItem={currentActiveItem}
                />
                {/* Button start */}
                {/* <div className='demo-inline-spacing nav-button'>
                   <a target="_blank" href="http://cmgalaxy.com/">
                    <Button.Ripple className='btn-icon' color='primary'>
                      <ExternalLink size={20} />
                    </Button.Ripple>
                   </a>
                </div> */}
    
                {/* <div className='navbar-header'>
                <ul className='nav navbar-nav flex-row'>
                  <li className='nav-item mr-auto'>
                    <a target="_blank" href='http://cmgalaxy.com/users' className='navbar-brand'>
                      <span className='brand-logo'>
                        <img className='menu-button1' src={button.app.appLogoImage} alt='icon' />
                      </span>
                      <img className='menu-button2 brand-text mb-0' src={button.app.appLogo} alt='Logo' />
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* Button End */}
              </ul>
            </PerfectScrollbar>
          </Fragment>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar