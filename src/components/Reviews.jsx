import React, { useState } from 'react'
import { BiCheck, BiDotsHorizontal, BiFilter, BiFilterAlt } from 'react-icons/bi'


import CreatableSelect from 'react-select/creatable';
import { StarRating } from './star';



const colourOptions = [{ value: 'chocolate', label: 'Chocolate' },
{ value: 'strawberry', label: 'Strawberry' },
{ value: 'vanilla', label: 'Vanilla' }]



export default function Reviews() {

    const [isSlice, setSlice] = useState(false)

    const revierws = [

        {
            id: 1,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 2,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 3,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 4,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 5,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 6,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        }
        ,
        {
            id: 7,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 8,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        },
        {
            id: 9,
            user: "Sarah M.",
            about: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
            data: "Posted on August 4, 2023",
        }
    ]
    const visibleltems = isSlice ? revierws : revierws.slice(0, 6);
    return (
        <div>
            <div className=' flex items-center justify-between mt-[20px]'>
                <div className=' flex items-center gap-[20px]'>
                    <h1 className=' text-[24px] font-bold'>All Reviews</h1>
                    <h1>(451)</h1>
                </div>
                <div className=' flex items-center justify-between gap-[40px]'>

                    <button className=" text-black/60 text-[16px]  rounded-[60px] bg-[#F0F0F0] p-[10px]">
                        <BiFilter className=' text-[30px] text-black' />
                    </button>
                    <button className=" text-black/60 text-[16px]  flex w-full">
                        <CreatableSelect isClearable options={colourOptions} />;
                    </button>

                    <button className=" text-white text-center  bg-black rounded-[62px] font-medium pl-[74px] pr-[74px] pt-[16px] pb-[16px] w-full" > Write a Review</button>
                </div>



            </div>
            <div className=' grid grid-cols-2 gap-[20px] mt-[40px]'>
                {visibleltems.map((item) => (
                    <div key={item.id}>
                        <div className=' border-1 border-black/10 p-[30px] w-full rounded-[20px]'>
                            <div className=' flex justify-between gap-2'>
                                <StarRating />
                                <BiDotsHorizontal className=' text-[30px] rounded-[60px] text-black/40' />
                            </div>
                            <div className=' flex  items-center gap-2'>
                                <h1 className=' text-[20px] font-bold mt-[10px]'>{item.user}</h1>
                                <BiCheck className=' text-white bg-[#01AB31] rounded-[20px] w-[24px] h-[24px] p-[1px]' />
                            </div>
                            <p className=' w-[72%]  text-black/60 mt-[10px] text-[16px] '>
                                {item.about}
                            </p>
                            <p className=' text-black/60 text-[16px] font-medium mt-[20px]'>{item.data}</p>
                        </div>
                    </div>

                ))
                }

            </div>
            <div className=' flex items-center justify-center my-10'>
                <button onClick={() => setSlice(!isSlice)} className=' border-1 border-black/10 pb-[16px] pt-[16px] pl-[54px] pr-[54px] text-[16px] font-medium rounded-[62px] cursor-pointer'>
                    {isSlice ? 'Yopish' : 'Barchasini ko‘rsatish'}
                </button>
            </div>
        </div>


    )
}
