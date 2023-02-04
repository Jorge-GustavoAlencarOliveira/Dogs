import React from 'react'
import { UserContext } from '../../UserContext'
import {useRouter} from 'next/navigation'

const ProtectedRoute = ({children}) => {
  const router = useRouter();
  const {login} = React.useContext(UserContext);
  if (login) return children;
  else {
    return React.useEffect(() => {
      router.push('/Login');
    },[]);
  }
}

export default ProtectedRoute;
