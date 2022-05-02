import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

type Props = {
    name : string
    path : string
}



const NavItem = ({name,path} : Props) => {
    const router = useRouter();
    const style = {
        marginRight: 10,
        color: router.asPath === path ? 'red' : 'black',
    }
    return (
    <Link href={path}>
        <li key={name} style={style}>
            {name} 
        </li>    
    </Link>
    )  
}

export default NavItem;