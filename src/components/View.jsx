import React from 'react';
import { useLocation } from 'react-router';
import { StarRating } from './star';

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
            <div className=' grid grid-cols-4 py-[20px] px-[120px] '>
                {products.map((item) => (
                    <div key={item.id} className=''>
                        <img src={item.img} alt="" className=' rounded-[20px] w-[400px]' />
                        <p className=' text-[27px] font-bold mt-2'>{item.txt}</p>
                        <div className=' flex items-center gap-2'>
                            <StarRating />
                        </div>
                        <p className=' text-[24px] font-bold'> {item.cost}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default View;
