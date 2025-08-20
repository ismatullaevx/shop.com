import React from 'react';
import { BiMessageAlt, BiMessageAltDots } from 'react-icons/bi';
import { MdEmail, MdMessage, MdOutlineMessage } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';

import twit from '../assets/icons/twitter.png'
import face from '../assets/icons/facebbok.png'
import inst from '../assets/icons/instagram.png'
import git from '../assets/icons/github.png'
const Footer = () => {
    return (
        <div>
            <div className='px-[120px]'>
                <div className=' bg-black flex items-center justify-center mt-[100px] p-[50px] rounded-[20px]'>
                    <div className=' flex w-full'>
                        <h1 className=' text-[40px] text-white font-[900] '>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
                    </div>

                    <button className=' w-full'>
                        <form className=' flex items-center gap-5 bg-white rounded-[62px] px-[30px] py-[16px]'>
                            <TfiEmail className='text-black/40  text-[18px]' />
                            <input type="email" placeholder='Enter your email address ' className='w-full text-black/40 text-[16px] outline-none' />
                        </form>
                        <div className=' bg-white rounded-[62px] px-[30px] py-[16px] mt-[20px]'>

                            <button className='w-full text-black font-medium  text-[16px] outline-none'>Subscribe to Newsletter</button>
                        </div>

                    </button>
                </div>
            </div>
            <div className=' bg-[#F0F0F0] px-[120px] w-[100%] flex gap-20  py-[40px] '>
                <div className=''>
                    <div>
                        <th className=' text-[32px] font-[900]'>SHOP.CO</th>
                    </div>
                    <tr >
                        <td >We have clothes that suits your style and  <br /> which you’re proud to wear. From  <br /> women to men.</td>
                    </tr>
                    <tr>
                        <td className=' flex items-center gap-4 mt-[20px]'>
                            <img src={twit} alt="" />
                            <img src={face} alt="" />
                            <img src={inst} alt="" />
                            <img src={git} alt="" />
                        </td>
                    </tr>

                </div>

                <div className='w-[100%] flex justify-between'>
                    <div>
                        <h1 className=' font-medium'>Company</h1>
                        <h1 className='mt-[10px]'>Help</h1>
                        <h1 className='mt-[10px]'>FAQ</h1>
                        <h1 className='mt-[10px]'>Resources</h1>
                        <h1 className='mt-[10px]'> Account</h1>
                    </div>
                    <div >
                        <h1 className=' font-medium'>Help</h1>
                        <h1 className='mt-[10px]'>  Customer Support   </h1>
                        <h1 className='mt-[10px]'> Account</h1>
                        <h1 className='mt-[10px]'>Free eBooks</h1>
                        <h1 className='mt-[10px]'>Free eBooks</h1>
                    </div>
                    <div>
                        <h1 className=' font-medium'>FAQ</h1>
                        <h1 className='mt-[10px]'>Delivery Details</h1>
                        <h1 className='mt-[10px]'> Manage Deliveries</h1>
                        <h1 className='mt-[10px]'>Development Tutorial</h1>
                        <h1 className='mt-[10px]'>Free eBooks</h1>
                    </div>
                    <div>
                        <h1 className=' font-medium'>Resources</h1>
                        <h1 className='mt-[10px]'>Terms & Conditions</h1>
                        <h1 className='mt-[10px]'>Orders</h1>
                        <h1 className='mt-[10px]'>How to - Blog</h1>
                        <h1 className='mt-[10px]'>Free eBooks</h1>
                    </div>

                </div>


            </div>
        </div>

    );
}

export default Footer;
