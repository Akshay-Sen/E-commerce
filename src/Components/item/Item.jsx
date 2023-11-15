import React from 'react'
import { FaRupeeSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function item(props) {
  return (
    <div className='group item w-80 shadow-md'>
      <div className='flex justify-center cursor-pointer overflow-hidden'>
        <Link to={`/product/${props.id}`}>
          <img className='group-hover:scale-110 duration-500 w-60 ' src={props.image} alt="" />
        </Link>
      </div>
      <p className='mx-6 my-1'>{props.name}</p>
      <div className="item-prices flex gap-4 mx-6">
        <div className="item-new-price flex items-center  ">
          <FaRupeeSign />
          <p className='font-semibold -ml-[2px] my-1  text-[18px] '> {props.new_price}</p>
        </div>
        {/* <div className="item-old-price flex items-center text-gray-500 line-through ">
        <FaRupeeSign className='line-through' /> 
       <p className=' -ml-[2px] text-[18px] '>{props.old_price}</p> 
        </div> */}
      </div>
    </div>
  )
}

export default item
