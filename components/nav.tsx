import React from 'react';
import NavType from '../types/nav';
import NavItem from './nav-item'


type Props = {
    navItems : NavType[]
}


const Nav = ({navItems} : Props) => {
    return (
        <ul style={{display:"flex", flexDirection: "row",justifyContent:"space-around"}}>
            {navItems.map(navItem => (
                <NavItem
                name={navItem.name}
                path={navItem.path}
                />
            ))}
        </ul>
    )
}

export default Nav;