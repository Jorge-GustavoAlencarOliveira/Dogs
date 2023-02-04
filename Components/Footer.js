import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Logo from '../Assets/dogs-footer.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image className={styles.img} src={Logo} alt="
      Logo" />
      <p>Dogs. Alguns direitos reservados</p>
    </footer>
  )
}
