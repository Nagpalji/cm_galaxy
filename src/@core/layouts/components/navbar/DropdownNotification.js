// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell } from 'react-feather'
import { Button, Badge, Media, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

const DropdownNotification = () => {
  // ** Notification Array
    const userName = localStorage.getItem("brand_name")
    const [notificationsArray, setNotificationsArray] = useState([])
    const url = "https://srvr1px.cyberads.io/cpl_alert/"
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
              },
              body: JSON.stringify({
                brand: userName
              })
        }).then(response => response.json()).then(anyjsonname => {
            console.log("anyjson", anyjsonname)
            setNotificationsArray(anyjsonname)
        }).catch(e => {
            console.log('e', e)
        })
    }, [])

  /* const notificationsArray = [
    {
      img: require('@src/assets/images/portrait/small/avatar-s-1.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    },
    {
      img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
      title: 'Monthly Payment Advice is ready.'
    }
  ] */

  // ** Function to render Notifications
  /*eslint-disable */
  const renderNotificationItems = () => {
    return (
      <PerfectScrollbar
        component='li'
        className='media-list scrollable-container'
        options={{
          wheelPropagation: false
        }}
      >
        {notificationsArray.map((item, index) => {
          return (
            <a key={index} className='d-flex' href='/' onClick={e => e.preventDefault()}>
              <Media
                className={classnames('d-flex', {
                  'align-items-start': !item.switch,
                  'align-items-center': item.switch
                })}
              >
                {!item.switch ? (
                  <Fragment>
                    <Media left>
                      <Avatar
                        {...(item.img
                          ? { img: item.img, imgHeight: 30, imgWidth: 30 }
                          : item.avatarContent
                            ? {
                              content: item.avatarContent,
                              color: item.color
                            }
                            : item.avatarIcon
                              ? {
                                icon: item.avatarIcon,
                                color: item.color
                              }
                              : null)}
                      />
                    </Media>
                    <Media body>
                      <div className='text-black font-weight-bold'>{item.Brand_name}</div>
                      <p className='' style={{ color: '#6e6b7b' }}>{item.CPL_Variation}</p>
                      <div className='d-flex'>
                        <p className='mr-2 notificationSender'>Sender</p>
                        <p className='mr-2 notificationDate'>{item.date_created}</p>
                        <p className='notificationTime'>9:19pm</p>
                      </div>
                    </Media>
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.Brand_name}
                    {item.switch}
                  </Fragment>
                )}
              </Media>
            </a>
          )
        })
        }
      </PerfectScrollbar >
    )
  }
  /*eslint-enable */

  return (
    <UncontrolledDropdown tag='li' className='dropdown-notification nav-item mr-20'>
      <DropdownToggle tag='a' className='nav-link' href='/' onClick={e => e.preventDefault()}>
        <Bell size={22} />
        <Badge pill color='danger' className='badge-up'>
        {notificationsArray.length}
        </Badge>
      </DropdownToggle>
      <DropdownMenu tag='ul' right className='dropdown-menu-media mt-0'>
        <li className='dropdown-menu-header'>
          <DropdownItem className='d-flex' tag='div' header>
            <h4 className='notification-title mb-0 mr-auto'>Notifications</h4>
            <Badge tag='div' color='light-primary' pill>
            {notificationsArray.length} New
            </Badge>
          </DropdownItem>
        </li>
        {renderNotificationItems()}
        <li className='dropdown-menu-footer'>
          <Link to="/NotificationHub">
            <Button.Ripple color='primary' block>
              View All Notifications
            </Button.Ripple>
          </Link>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default DropdownNotification
