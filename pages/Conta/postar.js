import React from 'react'
import Heads from '../../Components/Helper/Head';
import User from '../../Components/User/User';
import UserPhotoPost from '../../Components/User/UserPhotoPost'

const Postar = () => {
  return (
    <>
      <Heads title="Poste sua foto"/>
      <User />
      <UserPhotoPost />
    </>
  )
}

export default Postar;
