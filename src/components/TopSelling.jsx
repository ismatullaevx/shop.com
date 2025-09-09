import greenSh from '../assets/imgs/greenShirt.png'
import blackJ from '../assets/imgs/blackJeans.png'
import shortJ from '../assets/imgs/shortJeans.png'
import orn2Shirt from '../assets/imgs/orange2Shirt.png'
import star from '../assets/icons/star.png'
import star2 from '../assets/icons/Star3.png'
import { useNavigate } from 'react-router'
import { StarRating } from './star'
import CalculatedDiscount from './CalculatedDiscount'
import { useKeenSlider } from 'keen-slider/react'
export default function TopSelling({ search }) {
    const navigate = useNavigate()
    const products = [
        {
            id: 1,
            img: greenSh,
            txt: "VERTICAL STRIPED SHIRT",
            cost: 212,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 2,
            img: orn2Shirt,
            txt: "COURAGE GRAPHIC T-SHIRT",
            cost: 145,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 3,
            img: shortJ,
            txt: "LOOSE FIT BERMUDA SHORTS",
            cost: 70,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 4,
            img: blackJ,
            txt: "FADED SKINNY JEANS",
            cost: 80,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 5,
            img: shortJ,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 70,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 6,
            img: greenSh,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 70,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 7,
            img: orn2Shirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 130,
            icon: star,
            icon2: star2,
            discount: 25
        },
        {
            id: 8,
            img: orn2Shirt,
            txt: "SLEEVE STRIPED T-SHIRT",
            cost: 150,
            icon: star,
            icon2: star2,
            discount: 85
        },

    ]

    const filteredProducts = products.filter(products =>
        products.txt.toLowerCase().includes(search.toLowerCase())
    )


    const handleSendDate = (products) => {
        navigate('/viewAll', { state: products })
        console.log("press");

    }
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free-snap",
        slides: {
            perView: 1.75,
            spacing: 15,
        },
        breakpoints: {
            "(min-width : 1024px)": {
                slides: {
                    perView: 4,
                    spacing: 15,
                },
            }
        }
    })
     function formatText(text, maxLength = 18) {
        if (typeof text !== "string") return "";
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    }
    return (    
          <div className= 'lg:py-0 py-[20px] px-[20px] lg:px-[120px] '>
           <h1 className=' text-[32px] lg:text-[48px] font-[900] text-center  py-[20px] lg:py-[60px]'>TOP SELLING</h1>
            {filteredProducts.length <= 0 ? <p className='text-xl text-center text-red-600 my-10'>Products not found</p> : <div ref={sliderRef} className='keen-slider grid grid-cols-1 lg:grid-cols-4  lg:items-center lg:justify-between '>
                {filteredProducts.slice(0, 5).map((item) => (
                    <button onClick={() => handleSendDate(item.id)} key={item.id} className='keen-slider__slide number-slide1  lg:py-[0px]  text-[10px]'>
                        <img src={item.img} alt="" className='lg:w-[400px] rounded-2xl ' />

                        <p className=' text-[15px] text-left lg:text-[20px] font-bold mt-2'>{formatText(item.txt)}</p>
                        <div className='flex items-center gap-2'>
                            <StarRating product={item} />
                        </div>
                        <CalculatedDiscount prise={item.cost} discount={item.discount}  />

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
