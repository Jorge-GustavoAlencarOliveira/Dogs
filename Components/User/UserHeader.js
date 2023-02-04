import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const {pathname} = location;
  React.useEffect(() =>{
    switch(pathname) {
      case '/Conta': 
        setTitle('Conta');
        break;
      case '/Conta/estatisticas':
        setTitle('Estatísticas');
        break;
      case '/Conta/postar':
        setTitle('Poste sua Foto');
        break;
      default:
        setTitle("Minha Conta");
    }    
  }, [pathname])
  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
