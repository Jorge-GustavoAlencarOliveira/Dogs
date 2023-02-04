import React from 'react'
import Feed from '../../Components/Feed/Feed';
import Heads from '../../Components/Helper/Head';
import ProtectedRoute from '../../Components/Helper/ProtectedRoute'
import User from '../../Components/User/User';
import { UserContext } from '../../UserContext';

const index = () => {
  const {data} = React.useContext(UserContext);
  return (
    <> 
      <ProtectedRoute>
        <Heads title='Minha Conta'/>
        <User />
        <Feed user={data} />
      </ProtectedRoute>     
    </>
  ) 
}
export default index;
