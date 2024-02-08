import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/arrow.png'
const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
      HOME <img src={arrow_icon} alt="" width={20} /> SHOP <img src={arrow_icon} alt="" width={20} /> {product.category} <img src={arrow_icon} alt="" width={20} /> {product.name}
    </div>
  )
}

export default Breadcrums

