import React from "react";
import { createContext } from "react";
import product from "../Component/Assets/product";
export const ShopContezt = createContext(null);

const ShopConteztProvider = (props) =>{
     
    const contextValue = {product};

    return (
        <ShopContezt.Provider value={contextValue}>
            {props.children}
        </ShopContezt.Provider>
    )
}

export default ShopConteztProvider;