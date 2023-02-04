import React, { useContext } from 'react'
import Heads from '../../Components/Helper/Head'
import LoginForm from '../../Components/LoginForm'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
  const {login, router} = useContext(UserContext);
  if (login){
    router.push('/Conta');
  } else {
    return (
      <section className={`${styles.login } container1`}>
        <Heads title='Login'/>
        <LoginForm className={styles.forms} />
      </section>
    )
  }
}
    
export default Login;