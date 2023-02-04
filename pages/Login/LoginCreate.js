import React, { useContext } from 'react'
import { USER_POST } from '../../api';
import Button from '../../Components/Forms/Button';
import Input from '../../Components/Forms/Input'
import Error from '../../Components/Helper/Error';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';


const LoginCreate = () => {
  
  const username = useForm();
  const email = useForm('email');
  const password = useForm();
  const {userLogin} = useContext(UserContext);
  const { error, loading, request} = useFetch();

  async function handleSubmit (event) {
    event.preventDefault();
    if (username.validar() && email.validar() && password.validar()){
      const {url, options} = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      }) 
      const {response} = await request(url, options);
      if(response.ok ) userLogin(username.value, password.value);
    }
  } 

  return (
    <section className='animeLeft container'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' name='usuario' type='text' {...username}/> 
        <Input label='E-mail' name='email' type='email' {...email}/> 
        <Input label='Senha' name='password' type='password' {...password}/> 
        {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate
