import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

function Breadcum(props) {
    const {product} = props;

  return (
    <div className='flex items-center'>
      Home <IoIosArrowForward /> shop <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    </div>
  )
}

export default Breadcum
