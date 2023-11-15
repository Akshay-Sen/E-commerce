import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Item from '../../Components/item/Item'


function ShopCategory(props) {
    const {products_data} = useContext(ShopContext)
  return (
    <div>
      <div className="shopCategoty-Products flex justify-center gap-5 mt-5">
        {products_data.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} image={item.image} />
            }
            else{
                return null;
            }
        })}
      </div>
    </div>
  )
}

export default ShopCategory
