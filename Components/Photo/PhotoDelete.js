import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
  
    const {request, loading} = useFetch();
    async function handleClick () {
      const {url, options} = PHOTO_DELETE(id);
      const {response} = await request(url, options)
      if(response.ok) location.reload();
  } 
  
  return (
    <>
      {loading ? <button className={styles.delete} disabled>Deletar</button>: <button className={styles.delete} onClick={handleClick}>Deletar</button>}
    </>
  )
}
export default PhotoDelete
