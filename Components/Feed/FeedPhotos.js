import React from 'react'
import useFetch from '../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem'
import {PHOTOS_GET} from '../../api';
import Error from '../Helper/Error'
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css'
const FeedPhotos = ({user, setModal, page, setInfinite}) => {
  const {data, loading, error, request} = useFetch();

  React.useEffect(()=>{
    async function fetchPhotos (){
      const {url, options} = PHOTOS_GET({page, total: 3, user})
      const {response, json }= await request(url, options);
      if(response && response.ok &&  json.length < 3) setInfinite(false)
    }
    fetchPhotos();
  },[request, user])
  if(error) return <Error error={error} />;
  if(loading) return <Loading />;
  if(data){
    return (
      <ul className={`animeLeft ${styles.feed}`}>
        {data.map( item => 
          <FeedPhotosItem setModal={setModal} key={item.id} photo={item} /> 
        )}
      </ul>
    )
  }
  else return null;
}

export default FeedPhotos
