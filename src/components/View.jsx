import React from 'react';
import { useLocation } from 'react-router';
import { StarRating } from './star';
import CalculatedDiscount from './CalculatedDiscount';

const View = () => {
    const location = useLocation()
    const products = location.state
    console.log(products);
    if (!products) return <div>
        <h1>Malimot yoq</h1>
    </div>
    return (
        <div>
            <h1 className=' text-[48px] font-[900] text-center py-[60px]'>ALL PRODUCT</h1>
            <div className=' grid grid-cols-4 gap-5  px-[120px] items-center justify-between '>
                {products.map((item) => (
                    <div key={item.id} className=''>
                        <img src={item.img} alt="" className=' lg:rounded-[20px] lg:w-[400px] lg:h-[400px]' />
                        <p className='text-left text-[20px] font-bold mt-2'>{item.txt}</p>
                        <div className=' flex items-center gap-2'>
                            <StarRating />
                        </div>
                        <CalculatedDiscount prise={item.cost} discount={item.discount} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default View;
