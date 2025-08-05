import home from "../assets/imgs/home2.png"
import star from "../assets/icons/star1.png"
import star2 from "../assets/icons/star2.png"
import zara from "../assets/icons/zaraLogo.png"
import prada from "../assets/icons/pradaLogo.png"
import gucci from "../assets/icons/gucciLogo.png"
import calvin from "../assets/icons/calvinLogo.png"
import versace from "../assets/icons/versaceLogo.png"
export default function HomeStart() {
    return (
        <div>
            <div className=' bg-[#F0F0F0] w-full flex justify-center px-[60px]'>
                <div className='p-[60px]'>
                    <h1 className='text-[90px] font-[900] leading-[75px]'>
                        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
                    </h1>
                    <p className='text-black/60 w-[70%] mt-5 text-[20px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className=' bg-black text-white pb-[16px] pt-[16px] pl-[54px] pr-[54px] rounded-[64px] mt-5'>Shop Now</button>
                    <div className=' flex gap-[80px] items-center w-full mt-8 '>
                        <div className=''>
                            <h1 className='text-[50px]  font-bold'>200+</h1>
                            <p className='text-black/60'>International Brands</p>
                        </div>
                        <div>
                            <h1 className='text-[50px] font-bold'>2,000+</h1>
                            <p className='text-black/60'>High-Quality Products</p>
                        </div>
                        <div>
                            <h1 className='text-[50px] font-bold'>30,000+</h1>
                            <p className='text-black/60'>Happy Customers</p>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={star} alt="" className=' relative top-65 bottom-10 right-10 left-10' />
                </div>
                <div className='p-[60px] rb-[80px]'>
                    <img src={home} alt="" className=' w-[700px]' />

                </div>
                <div>
                    <img src={star2} alt="" className=' relative top-20 bottom-10' />
                </div>
            </div>
            <div className=' bg-black w-full flex items-center justify-between  py-[40px] px-[120px] text-white'>
                <img src={versace} alt="" />
                <img src={zara} alt="" />
                <img src={gucci} alt="" />
                <img src={prada} alt="" />
                <img src={calvin} alt="" />
            </div>
        </div>

    )
}
