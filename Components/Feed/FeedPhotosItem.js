import React from 'react'
import Image from '../Helper/Image';
import styles from './FeedPhotoItem.module.css'

const FeedPhotosItem = ({photo, setModal}) => {

  return (
    <li className={styles.photo} onClick={() => setModal(photo)}>
      <Image  src={photo.src} alt={photo.title} />
      <span className={styles.span}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem;
