import React from 'react'

const validation = {
  email: {
    regex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message: 'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.'
  },
  number: {
    // regex: /^/d+$/,
    message: 'Insira apenas números.' ,
  }
  
}

const useForm = (type) => {
  
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);
  
  function validar (value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false
    } else {
      setError(null);
      return true
    }
  }

  function onChange ({target}){
     if (error) validar(target.value);
     setValue(target.value);
  }

  return {
    value, 
    setValue,
    onChange,
    error,
    validar: () => validar(value),
    onBlur: () => validar(value),
  };
  
}

export default useForm;
