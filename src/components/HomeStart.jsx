import home from "../assets/imgs/home2.png"
import star from "../assets/icons/star1.png"
import star2 from "../assets/icons/star2.png"
import zara from "../assets/icons/zaraLogo.png"
import prada from "../assets/icons/pradaLogo.png"
import gucci from "../assets/icons/gucciLogo.png"
import calvin from "../assets/icons/calvinLogo.png"
import versace from "../assets/icons/versaceLogo.png"
import { useEffect, useState } from "react"


export default function HomeStart() {


    const [count, setCount] = useState(0);


    useEffect(() => {
        // 1. `setInterval` natijasini (ID'sini) o'zgaruvchiga saqlaymiz.
        const intervalId = setInterval(() => {

            // 2. Qiymatni yangilashda shart tekshiramiz.
            // Bu yerda modulo (%) operatoridan foydalanish eng qulay usul.
            setCount(prevCount => (prevCount + 1) % 60);

        }, 1000);

        // 3. useEffect'dan "tozalash funksiyasi"ni qaytaramiz.
        // Bu funksiya komponent ekrandan o'chirilganda (unmount) ishga tushadi.
        // Bu xotira sizib chiqishining (memory leak) oldini oladi.
        return () => {
            clearInterval(intervalId);
        };

    }, [])



    return (
        <div>

            <div className=' bg-[#F0F0F0] w-full block lg:flex lg:justify-center lg:px-[60px] p-[20px]'>
                <div className='lg:p-[60px]'>
                    <h1 className='lg:text-[74px] text-[40px] leading-[40px] font-[900] lg:leading-[75px]'>
                        FIND CLOTHES <br />  THAT MATCHES  <br /> YOUR STYLE
                    </h1>
                    <p className='text-black/60 lg:w-[90%]  text-[14px] mt-4 lg:text-[18px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className=' bg-black text-white pb-[16px] pt-[16px] lg:w-[300px] w-full pl-[24px] pr-[24px] rounded-[64px] mt-5'>Shop Now</button>
                    <div className=' flex items-center justify-center lg:justify-normal  gap-[80px]  lg:items-center w-full mt-8 '>
                        <div className=''>
                            <h1 className='text-[35px] lg:text-[50px] text-center  font-bold'>{count}+</h1>
                            <p className='lg:text-[16px] text-[12px] text-center  text-black/60'>International Brands</p>
                        </div>
                        <div>
                            <h1 className='text-[35px] lg:text-[50px] text-center font-bold'>{count}+</h1>
                            <p className= 'lg:text-[16px] text-[12px] text-center  text-black/60'>High-Quality Products</p>
                        </div>
                        <div className=" lg:block hidden ">
                            <h1 className='lg:text-[50px] font-bold'>{count} +</h1>
                            <p className='lg:text-[16px] text-[12px] text-center  text-black/60'>Happy Customers</p>
                        </div>
                    </div>
                    <div className=" lg:hidden block text-center ">
                        <h1 className='text-[35px] lg:text-[50px] text-center font-bold'>{count} +</h1>
                        <p className='lg:text-[16px] text-[12px] text-center  text-black/60'>Happy Customers</p>
                    </div>

                </div>
                <div className="mt-[20px] flex items-center justify-between w-full">
                    <img src={star} alt="" className=' w-[25px] lg:w-[40px] ' />
                    <img src={home} alt="" className='w-[280px] lg:w-[700px]' />
                    <img src={star2} alt="" className='w-[35px] lg:w-[60px]' />
                </div>


            </div>
            <div className=' bg-black w-full  flex items-center justify-center gap-[10px] lg:justify-between px-[150px] py-[20px] lg:gap-[20px] lg:py-[40px] lg:px-[120px] text-white'>
                <img src={versace} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" className="lg:block hidden" />
                <img src={calvin} alt="" className="lg:block hidden" />
            </div>
            <div className="lg:hidden bg-black w-full gap-[10px] px-[150px] py-[20px] flex items-center justify-center">
                <img src={prada} alt="" className="lg:hidden block" />
                <img src={calvin} alt="" className="lg:hidden block" />
            </div>
        </div>

    )
}
