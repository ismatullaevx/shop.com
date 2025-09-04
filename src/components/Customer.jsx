import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import { BiCheck } from 'react-icons/bi';
import { StarRating } from './star';
const Customer = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 1,
            spacing: 15,
        },
         breakpoints: {
            "(min-width : 1024px)": {
                slides: {
                    perView: 3,
                    spacing: 15,
                },
            }
        }
    })
    return (
        <div className='px-[20px] lg:px-[120px]'>

            <h1 className=' text-[30px] lg:text-[48px] font-bold mt-[20px]'>OUR HAPPY CUSTOMERS</h1>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1   border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
                <div className="keen-slider__slide number-slide2  border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
                <div className="keen-slider__slide number-slide3  border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
                <div className="keen-slider__slide number-slide4  border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
                <div className="keen-slider__slide number-slide5  border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
                <div className="keen-slider__slide number-slide6  border-1 border-black/10 p-[30px] w-full rounded-[20px]">
                    <div className=' flex gap-2'>
                        <StarRating />
                    </div>
                    <div className=' flex items-center gap-2'>
                        <h1 className=' text-[20px] font-bold mt-[10px]'>Sarah M.</h1>
                        <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] p-[1px]' />
                    </div>
                    <p className=' w-[72%] mt-[10px]'>
                        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Customer;
