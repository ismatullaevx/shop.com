import { BiBasket, BiBasketball, BiCaretRight, BiDockRight, BiMinus, BiPlus, BiRightArrow, BiRightArrowCircle, BiRightIndent, BiRotateRight, BiSolidBasket } from 'react-icons/bi';
import { CartProvider, useCart } from '../context/CartContext';
import { RiCouponLine } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';

export default function BasketPage() {

  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);


    const discountedPrice = subtotal - (subtotal * 20 / 100);

  return (
    <div className="px-[20px] lg:px-[120px] py-10 w-full ">
      <h1 className="text-3xl text-left lg:text-[35px] font-[900] mb-8 ">YOUR CART</h1>
      <div className=' lg:flex  w-full gap-5'>
        <div className='p-[14px] lg:px-[25px] lg:py-[20px]    gap-5 border-1 border-black/10 w-[100%] rounded-[20px]'>

          {cartItems.map((item) => (

            <div key={item.id} className=' flex  items-center gap-5 py-[25px] border-b-1  border-black/10' >

              <div>
                <img src={item.image} alt="" className=' w-[99px] lg:w-[124px] rounded-2xl' />

              </div>

              <div className=' w-full'>

                <div className=' flex items-center justify-between w-[100%] gap-5'>
                  <div>
                    <h1 className='text-[16px] lg:text-[20px] font-[700]'>{item.name}</h1>
                  </div>

                  <div>
                    <button onClick={() => {
                      removeFromCart(item.id, item.color, item.size);
                    }}><BiBasket className='text-red-700 text-[25px]' /></button>
                  </div>
                </div>
                <div className=' flex  gap-2'>
                  <h1>Color:</h1>
                  <h1 style={{ background: item.color }} className='w-[25px] h-[25px] rounded-2xl'></h1>
                </div>


                <div className='flex items-center justify-between'>
                  <h1 className='text-[20px] lg:text-[24px] font-[700]'>${item.price}</h1>

                  <div className="flex items-center gap-[20px] text-[20px] bg-[#F0F0F0] rounded-[62px] px-[10px] py-[5px] lg:py-[15px] lg:px-[40px]">
                    <button onClick={() => {
                      increaseQuantity(item.id, item.color, item.size);
                    }}
                    > <BiPlus  className=' text-black' /> 
                    </button>
                    <h1> {item.quantity}</h1>
                    <button onClick={() => {
                      decreaseQuantity(item.id, item.color, item.size);
                    }}><BiMinus className=' text-black' /></button>
                  </div>


                </div>

              </div>

            </div>

          )
          )}

        </div>

        <div className='lg:w-[40%] flex  justify-center lg:mt-[0px] mt-[20px]'>

          <div className='p-[14px] lg:px-[25px] lg:py-[20px]  items-center  gap-5 border-1 border-black/10 w-[100%] rounded-[20px] ' >
            <h1 className='text-[20px] lg:text-[24px] lg:font-[700]'>Order Summary</h1>
            <div className=' flex justify-between'>
              <h1 className='text-[16px] lg:text-[20px] text-black/60'>Subtotal</h1>
              <h1 className='text-[16px] lg:text-[20px] font-[700]'> <span>${subtotal.toFixed(2)}</span></h1>
            </div>
            <div className=' flex justify-between'>
              <h1 className='text-[16px] lg:text-[20px] text-black/60'>Discount (-20%)</h1>
              <h1 className='text-[16px]lg:text-[20px] font-[700] text-[#FF3333]'>{discountedPrice.toFixed(2)}</h1>

            </div>
            <div className=' flex justify-between'>
              <h1 className='text-[16px] lg:text-[20px] text-black/60'>Delivery Fee</h1>
              <h1 className='text-[16px]lg:text-[20px] font-[700]'>{cartItems.price}1</h1>

            </div>
            <hr className='mt-[18px] text-black/10' />
            <div className=' flex justify-between  mt-[2px]'>
              <h1 className='text-[16px] lg:text-[20px] text-black/60'>Total</h1>
              <h1 className='text-[16px] lg:text-[20px] font-[700]'> <span>${discountedPrice.toFixed(2)}</span></h1>

            </div>
            <div className=' flex items-center gap-5 mt-[10px]'>
              <button className=' flex items-center w-full bg-[#F0F0F0] px-[16px] right-0 py-[12px] rounded-[62px] gap-3'>
                <RiCouponLine />
                <input type="password" placeholder='Add promo code' className=' outline-0 w-full' />
              </button>
              <button className='px-[26px] lg:px-[56px] py-[12px] rounded-[62px] bg-black text-white'>Apply</button>
            </div>
            <button className='mt-[20px] w-full lg:px-[56px] py-[16px] rounded-[62px] bg-black text-white flex items-center justify-center gap-2'>
              <h1>Go to Checkout</h1>
              <FaArrowRight />
            </button>
          </div>


        </div>
      </div>
    </div>
  );
}
