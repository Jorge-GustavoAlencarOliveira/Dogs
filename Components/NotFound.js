import React from 'react';
import Heads from './Helper/Head';
import styles from './NotFound.module.css';
const NotFound = () => {
  return (
    <div className={`${styles.container} container mainContainer`}>
      <Heads title='Página não encontrada'/> 
      <div className={styles.content}>
        <h1 className='title'>Error: 404</h1>
        <p>Página não encontrada</p>
      </div>
    </div>
  )
}

export default NotFound
