

import { useState } from 'react';
import { BiLogIn, BiSearch, BiUser } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router';



export default function Header({ search, setSearch }) {
    const uName = localStorage.getItem("username");
    const isActive = localStorage.getItem("active");
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()

    const logout = () => {
        alert("Chqish")
        localStorage.clear("active")
        navigate('/login')

    }
    console.log(isActive);





    return (
        <div>
            {uName ? <div></div> : <div>
                <h1 className=' bg-black lg:text-[18px] text-[12px] text-center w-full p-[10px] text-white '>Sign up and get 20% off to your first order. Sign Up Now</h1>
            </div>}

            <div className=' bg-white flex justify-between items-center w-full gap-5 p-[20px] lg:px-[120px]'>
                <div className=' flex items-center gap-2'>
                    <button onClick={() => setOpen(true)}>
                        <RxHamburgerMenu className='text-2xl font-semibold text-black lg:hidden block' />
                    </button>

                    <NavLink to={"/"} className=' text-[32px] font-[900]'>SHOP.CO</NavLink>
                </div>

                <ul className='  items-center justify-center gap-6 w-full lg:flex hidden '>
                    <NavLink to="shop">Shop</NavLink>
                    <NavLink to="shop">On Sale</NavLink>
                    <NavLink to="shop">New Arrivals</NavLink>
                    <NavLink to="shop">Brands</NavLink>
                </ul>
                <button className='  hidden text-left lg:flex items-center justify-center gap-[12px] bg-[#F0F0F0] pr-[12px] pl-[30px] pt-[16px] pb-[16px] rounded-[62px] w-full'>
                    <BiSearch className=' text-2xl text-black/40' />
                    <input value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} type="text" placeholder='Search for products...' className='text-left text-1 text-black/40 outline-none  w-full  ' />
                </button>
                <div className=' flex justify-center items-center gap-5'>
                    {/* <p>{isActive === true ? { uName }: "Login"}</p> */}
                    {isActive == "true" ? <p className=' lg:block hidden'>{uName}</p> : <NavLink className={'cursor-pointer lg:block hidden'} to={"/login"}>Login</NavLink>}
                    <NavLink to={'/profile'}>
                        <BiUser className='text-2xl font-[900]' />
                    </NavLink>


                    <BsCart className='text-2xl font-[900]' />

                    <BiLogIn onClick={() => logout()} className='text-2xl font-[900] hover:text-red-600 cursor-pointer' />
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                <div className="p-4 bg-sky-500 text-white flex items-center justify-between">
                    <h2 className="text-lg font-bold">Hojiakbar</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-xl"
                    >
                        ✕
                    </button>
                </div>


                <ul className="p-4 space-y-3 text-gray-800">
                    <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                        New Group
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                        Contacts
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                        Calls
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                        Saved Messages
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
                        Settings
                    </li>
                </ul>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-gray-50 text-gray-500 text-sm">
                    Telegram Menu · v1.0
                </div>
            </div>

        </div>
    )
}
