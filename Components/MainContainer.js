import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';

const MainContainer = ({children}) => {
  return (
      <main className='App'>
        <Header />
        <div className='AppBody'>{children}</div>
        <Footer />
      </main>
  )
}
 
export default MainContainer;

