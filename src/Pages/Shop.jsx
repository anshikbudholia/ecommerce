import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Explore from '../Component/Explore/Explore'
import NewCollection from '../Component/NewCollections/NewCollection'
import NewsLetter from '../Component/NewsLetter/NewsLetter'


function Shop() {
  return (
    <div>
       <Hero/> 
       <Popular/>
     <Explore />
    <NewCollection />
    <NewsLetter />
   
    </div>
  )
}

export default Shop