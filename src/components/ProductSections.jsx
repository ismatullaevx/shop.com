// ProductSections.jsx (этот файл не меняется, так как передача пропсов верна)

import Tshirt from '../assets/imgs/Tshirt.png'
import jeans from '../assets/imgs/jeans.png'
import shirt from '../assets/imgs/shirt.png'
import ornShirt from '../assets/imgs/orangeShirt.png'
import star from '../assets/icons/star.png'
import star2 from '../assets/icons/star3.png'
import { NavLink, useNavigate } from 'react-router'
import { StarRating } from './star' // Убедись, что путь к StarRating правильный
import CalculatedDiscount from './CalculatedDiscount'

export default function ProductSections({ search }) {


    const navigate = useNavigate()



    const products = [
        {
            id: 1,
            img: Tshirt,
            txt: "T-SHIRT WITH TAPE DETAILS",
            cost: 120,
            icon: star,
            icon2: star2,
            descrition: " This graphic t-shirt which is perfect for any occasion. Crafted from a soft and  breathable fabric, it offers superior comfort and style.",
            colors: ["#4F4631", "#314F4A", "#31344F"],
            buttons: ["Small", "Medium", "Large", "X-Large"],
            discount: 15,
            basket: "hello"

        },
        {
            id: 2,
            img: jeans,
            txt: "SKINNY FIT JEANS",
            cost: 240,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 3,
            img: shirt,
            txt: "CHECKERED SHIRT",
            cost: 180,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 4,
            img: ornShirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 5,
            img: ornShirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 6,
            img: ornShirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 7,
            img: ornShirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 15
        },
        {
            id: 8,
            img: ornShirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 15
        },
    ]

    const filteredProducts = products.filter(product =>
        product.txt.toLowerCase().includes(search.toLowerCase())
    );

    const handleSendDate = (products) => {
        navigate('/viewAll', { state: products })
        console.log("press");

    }
    const handleOpen = (id) => {
        navigate(`/product/${id}`, { state: products });
    };
    return (
        <div>
            <h1 className=' text-[48px] font-[900] text-center py-[60px]'>NEW ARRIVALS</h1>
            {filteredProducts.length <= 0 ? <p className='text-xl text-center text-red-600 my-10'>Products not found</p> : <div className=' grid grid-cols-4 py-[20px] px-[120px] '>
                {filteredProducts.slice(0, 4).map((item) => (
                    <button onClick={() => handleOpen(item.id)} key={item.id} className=''>
                        <img src={item.img} alt="" className=' rounded-[20px] w-[400px]' />

                        <p className='text-left text-[27px] font-bold mt-2'>{item.txt}</p>
                        <div className='flex items-center gap-2'>
                            <StarRating product={item} />
                        </div>
                        <CalculatedDiscount prise={item.cost} discount={item.discount} />

                    </button>
                ))}
            </div>}
            <div className=' flex items-center justify-center mt-[20px]'>
                <button onClick={() => handleSendDate(products)} className=' border-1 border-black/10 pb-[16px] pt-[16px] pl-[54px] pr-[54px] text-[16px] font-medium rounded-[62px] cursor-pointer'>
                    View All
                </button>
            </div>
        </div>
    )
}