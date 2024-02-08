import React from 'react'
import './RelatedProduct.css'
import Item from '../Items/Item'

import product from '../Assets/product'

const RelatedProduct = () => {
  return (
      <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

            })}
        </div>
    </div>
  )
}

export default RelatedProduct
