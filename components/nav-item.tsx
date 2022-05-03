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
<<<<<<< HEAD
        marginRight: 80,
        color: router.asPath === path ? 'red' : 'white',
=======
        marginRight: 10,
        color: router.asPath === path ? 'red' : 'black',
>>>>>>> 9fe2a714906a74f0eafcc22592c4dffe7435383d
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