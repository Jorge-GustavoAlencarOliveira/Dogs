import React from 'react'
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import useFetch from '../Hooks/useFetch'
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css'

const FeedModal = ({photo, setModal}) => {
  const {data, error, loading, request} = useFetch();
  React.useEffect(() =>{
    const {url, options} = PHOTO_GET(photo.id)
    request(url, options)
  },[photo, request])
  function handleOutsideClick (event){
    if (event.target === event.currentTarget) setModal(null);
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/> }
      
    </div>
  )
}

export default FeedModal
