import { createContext } from "react";
import products_data from "../assets/Data";


export const ShopContext = createContext()

const ShopContextProvider = (props)=>{

    const contextValue = {products_data}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
