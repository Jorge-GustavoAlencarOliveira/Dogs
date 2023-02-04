import React from 'react'
import { useRouter } from 'next/router'
import useFetch from '../Hooks/useFetch';
import { PHOTO_GETS } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent';
import Heads from '../Helper/Head';
const Photo = ({single}) => {
  const router = useRouter();
  const {id} = router.query
  const {request, error, loading, data} = useFetch();

  React.useEffect(() => {
    const {url, options} = PHOTO_GETS(id);
    request(url, options) 
  },[id, request]);
  
  if(error) return <Error error={error} />;
  if(loading) return <Loading />
  if(data)
  return (
    <section className='container mainContainer'>
      <Heads title={data.photo.title} />
      <PhotoContent data={data} single={single}/>
    </section>
  )
  else return null
}

export default Photo
