import React from 'react'
import mslogo from '../img/mslogo.png'
import { FaBars} from 'react-icons/fa'
import {VscSearch, VscAccount} from 'react-icons/vsc'
import {HiOutlineShoppingCart} from "react-icons/hi";



const Header = () => {

  return (
    <header className="header">
      <div className="menu-btn">
        <div className="mx-4">
          <FaBars />
        </div>
        <div>
          <VscSearch />
        </div>
      </div>



    <div className="logo">
          <div className='mr-4 cursor-pointer'>      
              <img src={mslogo} alt="Microsoft" />     
          </div>
          <ul className='firstlink cursor-pointer'>        
           <li> Microsoft 365</li>      
            <li>Office</li>
            <li>Windows</li>
            <li>Surface</li>
            <li>Xbox</li>
            <li>Deals</li>
            <li>Support</li>
          </ul>
    </div>

      <div className="cart flex text-xl">
        <div>
        <HiOutlineShoppingCart  />
        </div>
        <div className="mx-4">
          <VscAccount />
        </div>
      </div>

      <div className="sign-in cursor-pointer">
        <ul className='gap-3'>
          <li>All Microsoft</li>
          <VscSearch className='text-base text-gray-700 m-1'/>
          <HiOutlineShoppingCart className='text-xl text-gray-500 m-px'/>
          <VscAccount className='text-2xl text-gray-500'/>
        </ul>
      </div>
    </header>
  )
}

export default Header
