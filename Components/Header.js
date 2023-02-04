import React from 'react';
import styles from './Header.module.css';
import Link from "next/link";
import Dogs from '../Assets/dogs.svg';
import Image from 'next/image';
import { UserContext } from '../UserContext';


export const Header = () => {
  const {data} = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href='/' aria-label='Dogs - Home'><Image src={Dogs} alt='logo'/></Link>
        {data ? <Link className={styles.login} href='/Conta'>{data.username} </Link> : <Link className={styles.login} href='/Login'>Login/ Criar</Link>}             
      </nav>
    </header>
  )
}
