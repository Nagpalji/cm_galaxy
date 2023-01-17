import React, { useState } from 'react'
import Styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const SidebarData = [
    {
        title: 'User IP',
        icon: <AiIcons.AiFillHome />
    },
    {
        title: 'Device Tracking',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'PC / Desktop',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Tablet',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Mobile',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Operating System',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Apple macOS',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Windows OS',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Android OS',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Linux OS',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Geographic',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Demographic',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Avg. Session',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Page Per Session',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Avg. Time Per Session',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Bounce Rare',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Product Preferences',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'No. Of Product Engaged',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Reports1',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports2',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Reports3',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Products',
        icon: <FaIcons.FaCartPlus />
    }
]

const SidebarNav = Styled.nav`
  background: #ffffff;
  width: 260px;
  height: 75vh;
  display: flex;
  overflow: auto;
  justify-content: center;
  position: fixed;
  transition: 350ms;
  border-radius: 5px;
  z-index: 10;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
`
const SidebarWrap = Styled.div`
    width: 100%;
`

function PushNotification({ item }) {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    )
}

export default PushNotification