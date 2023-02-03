// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Bell } from 'react-feather'
import * as FaIcons from 'react-icons/fa'
import { Button, Badge, Media, DropdownItem } from 'reactstrap'

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
            title: 'Monthly Payment Advice is ready.',
            sender: 'Anskal'
        },
        {
            img: require('@src/assets/images/portrait/small/avatar-s-2.jpg').default,
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
            title: 'Monthly Payment Advice is ready.',
            sender: 'Dev Buddy'
        },
        {
            img: require('@src/assets/images/portrait/small/avatar-s-3.jpg').default,
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
            title: 'Monthly Payment Advice is ready.',
            sender: 'Aunanta'
        },
        {
            img: require('@src/assets/images/portrait/small/avatar-s-4.jpg').default,
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
            title: 'Monthly Payment Advice is ready.',
            sender: 'sender-1'
        },
        {
            img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default,
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
            title: 'Monthly Payment Advice is ready.',
            sender: 'sender-2'
        },
        {
            img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
            subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, dolores quae? Iure dolor nihil expedita quos.',
            title: 'Monthly Payment Advice is ready.',
            sender: 'sender-3'
        }
    ] */

    // ** Function to render Notifications
    /*eslint-disable */
    const renderNotificationItems = () => {
        return (
            <div className='media-list scrollable-container bg-white rounded shadow p-1' >
            <div className='d-flex justify-content-between align-item-center'>
                <h2 className='font-weight-bold'>Notifications Hub</h2>
                <div className='d-flex'>
                    <div className='mx-1'>
                        <FaIcons.FaCheckDouble className='text-primary' />
                    </div>
                    <p className='text-primary'>Mark as read</p>
                </div>
            </div>
            <hr className="my-2" />
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
                                                <p className='mr-2 notificationSender'>{item.sender}</p>
                                                <p className='mr-2 notificationDate'>{item.date_created}</p>
                                                <p className='notificationTime'>9:19pm</p>
                                            </div>
                                        </Media>
                                            <hr />
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
            </div >
        )
    }
    /*eslint-enable */

    return (
        <div className=''>
            {renderNotificationItems()}
        </div>
    )
}

export default DropdownNotification
