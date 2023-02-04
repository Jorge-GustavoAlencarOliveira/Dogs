import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import {useRouter} from 'next/navigation';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] =React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();  

  async function getUser(token){
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin (username, password) {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({username: username, password: password});
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Usuário e senha inválidos`);
      const {token} = await response.json();
      localStorage.setItem('token', token);    
      await getUser(token);
      router.push('/Conta');
    } catch (err) {
       setError(err.message);
       setLoading(false);
    } finally{
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLogin(false);
      setLoading(false);
      localStorage.removeItem('token');
      router.push('/Login');
    }, [router]
  ) 

  React.useEffect(() => {
    async function autoLogin (){
     const token = localStorage.getItem('token');
     if (token) {
       try{
         setError(null);
         setLoading(true);
         const {url, options} = TOKEN_VALIDATE_POST(token);
         const response = await fetch(url, options);
         if(!response.ok) throw new Error('Token inválido');
         const json = await response.json();
         await getUser(token);
       } catch (error) {
           userLogout();
       } finally{
         setLoading(false);
       }
     } else setLogin(false)
    }
    autoLogin();
 }, [userLogout]);

  return (
   <UserContext.Provider value={{userLogin, data, userLogout, loading, login, error, router}}>
     {children}
   </UserContext.Provider>
  )
}
