import React, { useContext } from 'react'
import { useRouter } from 'next/router';
import Feed from '../Feed/Feed'
import Heads from '../Helper/Head';
const UserProfile = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <section className='container mainContainer'>
      <Heads title={id}/>
      <h1 className='title'>
        {id}
      </h1>
      <Feed user={id}/>
    </section>
  )
}

export default UserProfile;
