import React from 'react';
import styles from './billboard.module.scss';
import Image from 'next/image';
import avatar from '../public/assets/avatar.png';

type Props = {
    primaryTitle : string,
    stringTitle : string,
    description : string,
    url? : string,

}

const Billboard = ({primaryTitle, stringTitle, description, url} : Props) => {
    return (
        <>
        <div className={styles.billboard}>
            <h1>{primaryTitle}</h1>  
            <h3>{stringTitle}</h3>
            <p>{description}</p>
            <p>Currently managing a skilled mobile engineering team at <a href={url} target="_blank">MultiChoice </a></p>
        </div>
        </>
    )
}

export default Billboard;