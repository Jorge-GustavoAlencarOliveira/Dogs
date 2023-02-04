import React from 'react'
import useFetch from '../Hooks/useFetch'
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments}) => {
  const {request, error} = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event){
    event.preventDefault();
    const {url, options} = COMMENT_POST(id, {comment});
    const {response, json} = await request(url, options);
    if (response.ok) {
      setComment('');  
      setComments((comments) => [...comments, json]  );
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        className={styles.textarea}
        value={comment} 
        onChange={({target}) => setComment(target.value)} 
        name="comment" 
        placeholder="Comente..."
        id="comment" 
        cols="30" 
        rows="10" />
      <button className={styles.button}></button>
      {/* <Error error={error} /> */}
    </form>
  )
}
export default PhotoCommentsForm
