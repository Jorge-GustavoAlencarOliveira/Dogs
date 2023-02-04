import Link from 'next/link'
import React from 'react'
import { UserContext } from '../../UserContext'
import Image from '../Helper/Image'
import PhotoComments from './PhotoComments'
import styles from './PhotoContent.module.css'
import PhotoDelete from './PhotoDelete'

const PhotoContent = ({data, single}) => {
  const {photo, comments} = data;
  const user = React.useContext(UserContext);
  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image alt={photo.title} src={photo.src} />
      </div>
      <div className={styles.details} >
        <p className={styles.author}>
          {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>   }
          <span className={styles.span}>{photo.acessos}</span>
        </p>
        <h1 className='title'>
          <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
        </h1>
        <ul className={styles.attributes}>
           <li>{photo.peso} kg</li>
           <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
        </ul>
      </div>
      <PhotoComments id={photo.id} comments={comments}/>
    </div>
  )
}
export default PhotoContent;
