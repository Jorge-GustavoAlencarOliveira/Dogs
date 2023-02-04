import React from 'react'
import Head from 'next/head'
const Heads = ({title, description}) => {
  return (
    <Head>
       <title>{`${title} | Dogs`}</title>
       <meta name={description ? description : ''} />
    </Head>
  )
}
export default Heads;
