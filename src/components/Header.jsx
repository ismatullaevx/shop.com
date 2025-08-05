import React from 'react'
import { BiSearch, BiUser } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import { NavLink } from 'react-router';


export default function Header({ search, setSearch }) {

    return (
        <div>
            <div>
                <h1 className=' bg-black  text-center w-full text-white p-[10px]'>Sign up and get 20% off to your first order. Sign Up Now</h1>
            </div>


            <div className=' bg-white flex justify-between items-center w-full p-[20px] px-[120px]'>
                <h1 className=' text-[32px] font-[900]'>SHOP.CO</h1>
                <ul className=' flex items-center justify-between gap-6'>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="shop">On Sale</NavLink>
                    <NavLink to="shop">New Arrivals</NavLink>
                    <NavLink to="shop">Brands</NavLink>
                </ul>
                <button className=' text-left flex items-center justify-center gap-[12px] bg-[#F0F0F0] pr-[12px] pl-[12px] pt-[16px] pb-[16px] rounded-[62px] w-[577px]'>
                    <BiSearch className='text-left text-2xl text-black/40' />
                    <input value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} type="text" placeholder='Search for products...' className='text-left text-1 text-black/40 outline-none mr-[300px]' />
                </button>
                <div className=' flex justify-center items-center gap-5'>
                    <BsCart className='text-2xl font-[900]' />
                    <BiUser className='text-2xl font-[900]' />
                </div>
            </div>

        </div>
    )
}
