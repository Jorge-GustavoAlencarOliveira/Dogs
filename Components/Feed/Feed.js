import react from 'react';
import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({user}) => {
  const [modal, setModal] = React.useState(null);
  const [page, setPages] = React.useState([1])
  const heightRef = React.useRef(null);
  const [infinite, setInfinite] = React.useState(true)
  React.useEffect(() =>{
    let wait = false;
    function infinteScroll (){
      if(infinite){
        const scroll = heightRef.current.scrollY;
        const height = heightRef.current.offsetHeight - heightRef.current.innerHeight;
        if(scroll > height * .75 && !wait){
          setPages((pages) => [...pages, page.length + 1])
          wait = true;
          const interval = setTimeout(() =>{
            wait = false;
          }, 500)
          clearInterval(interval)
        }
      }
    }
    addEventListener('wheel', infinteScroll);
    addEventListener('scroll', infinteScroll);    
    return () => {
      removeEventListener('wheel', infinteScroll);
      removeEventListener('scroll', infinteScroll)
    }
  },[infinite])

  return (
    <div className='container overflow' ref={heightRef}>
      {modal && <FeedModal photo={modal} setModal={setModal}/>}
      {page.map(item => <FeedPhotos 
        key={item} 
        user={user} 
        setModal={setModal}
        page={page}
        setInfinite={setInfinite}/>)
      }   
    </div>
  )
}

export default Feed
