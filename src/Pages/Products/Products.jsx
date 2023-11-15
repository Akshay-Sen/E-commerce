import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import ProductDetails from '../../Components/ProductsDetails/ProductDetails';
import Breadcum from '../../Components/Breadcum/Breadcum';


function Products() {
  const {products_data} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products_data.find((e)=> e.id=== Number(productId));
  return (
    <div>
      <Breadcum product={product} />
      <ProductDetails product={product} />
    </div>
  )
}

export default Products
