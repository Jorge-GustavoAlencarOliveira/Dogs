import React from 'react'
import Link from 'next/link'
import { UserContext } from '../../UserContext'
import Feed from '../../Assets/feed.svg';
import Postar from '../../Assets/adicionar.svg';
import Estatistica from '../../Assets/estatisticas.svg';
import Sair from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css';
import Image from 'next/image';
import useMedia from '../Hooks/useMedia';

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const conta = '/Conta';
  const {pathname} = location;
  React.useEffect(() =>{
     setMobileMenu(false);
  },[pathname]);

  return (
    <>
      {mobile && 
        <button 
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} 
          onClick={() => setMobileMenu(!mobileMenu)}>
        </button>
      }
      <nav className={`${mobile ? styles.navMobile : styles.nav}  ${mobileMenu && styles.navMobileActive}`}>
        <Link className={location.pathname === conta ? styles.active : '' } href={conta}><Image src={Feed} alt='Feed'/> {mobile && 'Minhas Fotos'}</ Link>
        <Link href='/Conta/estatisticas'><Image src={Estatistica} alt='Estatistica'/>{mobile && 'Estatísticas'} </ Link>
        <Link href='/Conta/postar'><Image src={Postar} alt='Postar'/>{mobile && 'Adicionar Foto'} </ Link>
        <button onClick={userLogout}><Image width='auto' src={Sair} alt='Sair'/>{mobile && 'Sair'} </button>
      </nav>
    </>
  )
}
export default UserHeaderNav;
