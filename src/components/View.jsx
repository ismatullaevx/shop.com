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
    // const number1 = ({ name1 }) => {
    //     if (name1.length < 5) {
    //         return (
    //             <p className='text-left text-[12px] lg:text-[20px] font-bold mt-2'>{name1.slice(0, 1)}</p>
    //         )
    //     }
    // }
    return (
        <div>
            <h1 className='text-[38px] lg:text-[48px] font-[900] text-center py-[60px]'>ALL PRODUCT</h1>
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-5 px-[20px]  lg:px-[120px] items-center justify-between '>
                {products.map((item) => (
                    <div key={item.id} className=''>
                        <img src={item.img} alt="" className=' rounded-[20px] lg:w-[400px] ' />
                        <p className='text-left text-[12px] lg:text-[20px] font-bold mt-2'>
                            {item.txt}
                        </p>


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
