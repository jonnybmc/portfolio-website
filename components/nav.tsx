import React from 'react';
import NavType from '../types/nav';
import NavItem from './nav-item'


type Props = {
    navItems : NavType[]
}


const Nav = ({navItems} : Props) => {
    return (
<<<<<<< HEAD
        <ul style={{display:"flex", flexDirection: "row",justifyContent:"flex-end",background: "transparent", position:"fixed",width:"100%",color:"#fff",zIndex:"2",fontSize: "2rem",paddingTop: "3rem"}}>
            {navItems.map((navItem, index) => (
                <NavItem key={index}
=======
        <ul style={{display:"flex", flexDirection: "row",justifyContent:"space-around"}}>
            {navItems.map(navItem => (
                <NavItem
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d
                name={navItem.name}
                path={navItem.path}
                />
            ))}
        </ul>
    )
}

export default Nav;