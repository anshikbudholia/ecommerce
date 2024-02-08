import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-box-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> Commerce is defined as the exchange of goods and 
         services between two or more entities. It typically involves
          buying and selling things of value. Commerce can take place between businesses, between consumers, or between businesses and consumers.</p>
      <p> Commerce is defined as the exchange of goods and 
         services between two or more entities. It typically involves
          buying and selling things of value. Commerce can take place between businesses, between 
          consumers, or between businesses and consumers.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
