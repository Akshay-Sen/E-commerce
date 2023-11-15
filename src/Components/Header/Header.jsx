import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { GrCart } from 'react-icons/gr'
import { BsHeart } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <div className='w-full h-16 flex items-center justify-around  border-b-2 border-blue-100 '>
        <div className='logo text-xl font-bold'>
          Logo
        </div>
        <div className='search-bar flex items-center  '>
          <input type="text" placeholder='Search'
            className='w-[35rem] h-10 p-4 text-xl focus:outline-none focus:border-blue-300 border border-gray-300 rounded-l-md  ' />
          <div className='w-16 h-10 flex items-center justify-center bg-[#f8f8f8] border
           border-gray-300 rounded-r-md'  >
            <FiSearch className='text-xl ' />
          </div>
        </div>
        <div className='flex items-center justify-center gap-10 '>
          <div className='relative'>
            <Link to="/cart">
            <GrCart className='text-2xl cursor-pointer ' />
            <span className='bg-red-600 absolute bottom-2 left-3 w-6 h-6 grid place-items-center rounded-full text-white'>9</span>
            </Link>
          </div>
          <div>
            <BsHeart className='text-2xl cursor-pointer' />
          </div>
          <div>
            <Link to='/order'> <button className='text-xl'>Order</button></Link>
          </div>
          <div>
            <Link to="/signUp">
              <button className='text-xl'>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <nav className='Second-head w-full h-14 shadow-md flex items-center px-24 '>
          <ul className='flex items-center gap-8'>
            <li className='text-xl'><NavLink to="/men">Men</NavLink></li>
            <li className='text-xl'><NavLink to="/women">Women</NavLink></li>
            <li className='text-xl '><NavLink to="/kids">Kids</NavLink></li>
            <li className='text-xl'>
              <Link to="/contact">
              <button>Contact</button>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default Header
