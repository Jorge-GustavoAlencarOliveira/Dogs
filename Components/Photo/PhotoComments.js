import React from 'react';
import {UserContext} from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';

const PhotoComments = ({id, comments}) => {
  const {login} = React.useContext(UserContext)
  const [comment, setComment] = React.useState(() => comments);
  const commentsSection = React.useRef(null);
  React.useEffect(() => {
     commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  },[comment])
  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comment.map((item) => <li key={item.comment_ID}><b>{item.comment_author}: </b>
        <span>{item.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={id} setComments={setComment}/>}
    </>
  )
}

export default PhotoComments
