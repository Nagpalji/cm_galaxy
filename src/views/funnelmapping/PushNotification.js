import React, { useState } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
// import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const SidebarData = [
    {
        title: 'Overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Revenue',
                icon: <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title: 'Reports',
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
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  transition: 350ms;
  z-index: 10;
`
const SidebarWrap = Styled.div`
    width: 100%;
`

const SidebarLable = Styled.span`
    margin-left: 16px;
`

const DropdownLink = Styled(Link)`
    background: #414757;
    height: 50px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #632ec4;
        cursor: pointer;
    }
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