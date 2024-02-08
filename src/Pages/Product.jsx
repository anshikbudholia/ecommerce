import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums'
import { ShopContezt } from '../Contezt/ShopContezt'
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct'

const Product = () => {
  const {product} = useContext(ShopContezt);
  const {ProductId} = useParams();
  const Product = product.find((e)=> e.id === Number(ProductId));

  return (
    <div>
    <Breadcrums  product={Product}/>
    <ProductDisplay  Product={Product}/>
    <DescriptionBox />
    <RelatedProduct />
    </div>
  )
}

export default Product