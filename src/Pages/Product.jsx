import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums'
import { ShopContezt } from '../Contezt/ShopContezt'

const Product = () => {
  const {product} = useContext(ShopContezt);
  const {ProductId} = useParams();
  const Product = product.find((e)=> e.id === Number(ProductId));

  return (
    <div>
    <Breadcrums  Product={Product}/>
    </div>
  )
}

export default Product