import React from "react"
import { useContext } from "react"
import './css/ShopCategory.css'
import dropdown_icon from '../Component/Assets/dropdown_icon.png'
import Item from "../Component/Items/Item"
import { ShopContezt } from "../Contezt/ShopContezt"

const ShopCategory = (props) => { 
 

const {product} = useContext(ShopContezt);
return(
  <div className="shop-category">
     <img  className="shopcategory-banner" src={props.banner}  height={350} alt="" />
     <div className="shopcategory-indexsort">
      <p>
        <span>Showing 1-3</span>out of 9 products
      </p>
      <div className="shopcategory-sort">
      Sort by <img src={dropdown_icon} width={15} alt="" />
      </div>
     </div>
     <div className="shopcategory-products">
     {product.map((item,i)=>{
        if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            
        }
        else{
          return null;
        }
      })}
     </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
  </div>
)
}

export default ShopCategory
