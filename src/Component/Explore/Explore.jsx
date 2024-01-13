import React from 'react'
import './Explore.css'
import exclusive_img from '../Assets/p1_product.jpg'
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
         <img src={exclusive_img} alt="" />
        </div>
    </div>
  )
}

export default Explore