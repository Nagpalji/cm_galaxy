import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const SidebarLink = Styled(Link)`
    display: flex;
    color: #6e6b7b;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 14px;
    border-radius: 4px;

    &:hover{
        background: #4076d9;
        color: #ffffff;
        cursor:pointer;
    }
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
    color: #6e6b7b;
    font-size: 13px;
    border-radius: 4px;

    &:hover{
        background: #4076d9;
        color: #ffffff;
        cursor: pointer;
    }
`

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <SidebarLink onClick={item.subNav && showSubnav} >
                <div>
                    {item.icon}
                    <SidebarLable>{item.title}</SidebarLable>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item) => {
                return (
                    <DropdownLink>
                        {item.icon}
                        <SidebarLable>{item.title}</SidebarLable>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu