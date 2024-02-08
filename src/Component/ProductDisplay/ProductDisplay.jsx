import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import stardull_icon from "../Assets/stardull_icon.png"
import { ShopContezt } from '../../Contezt/ShopContezt'
const ProductDisplay = (props) => {
    const {Product} = props;
    const {addToCart} = useContext(ShopContezt);
  return (
    <div  className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
              <img src={Product.image} alt="" />  
              <img src={Product.image} alt="" />
              <img src={Product.image} alt="" />
              <img src={Product.image} alt="" />

        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={Product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
         <h1>{Product.name}</h1>
         <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" width={30} />
            <img src={star_icon} alt="" width={30}/>
            <img src={star_icon} alt=""width={30} />
            <img src={star_icon} alt=""width={30} />
            <img src={stardull_icon} alt=""width={29} />
            <p>(122)</p>
         </div>
         <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${Product.old_price}</div>
         <div className="productdisplay-right-price-new">${Product.new_price}</div>
         </div>
         <div className="productdisplay-right-description">
         Commerce is defined as the exchange of goods and 
         services between two or more entities. It typically involves
          buying and selling things of value. Commerce can take place between businesses, between consumers, or between businesses and consumers.

         </div>
         <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
         </div>
         <button onClick={()=>{addToCart(Product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
