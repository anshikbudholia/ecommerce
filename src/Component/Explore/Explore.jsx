import React from 'react'
import './Explore.css'
import k23 from '../Assets/k24.jpg'
const Explore=() => {
  return (
    <div className='offers'>
        <div className="offers-left">
       <h1>Exclusive</h1>
       <h1>Offers for you</h1>
       <p>Only on best sellers products</p>
       <button> check now</button>
        </div>
        <div className="offers-right">
         <img src={k23} alt="" width={250}/>
        </div>
    </div>
  )
}

export default Explore