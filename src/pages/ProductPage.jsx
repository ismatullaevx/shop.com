import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Tshirt from "../assets/imgs/Tshirt.png";
import Tshirt2 from "../assets/imgs/Tshirt.png";
import Tshirt3 from "../assets/imgs/Tshirt.png";
import { StarRating } from "../components/star";
import { BiCheck, BiMinus, BiPlus } from "react-icons/bi";
import { NavLink, useLocation, useParams } from "react-router";
import Reviews from "../components/Reviews";
import Detail from "../components/Detail";




export default function ProductPage() {
    const images = [Tshirt, Tshirt2, Tshirt3];
    const [activeTab, setActiveTab] = useState("Rating&Reviews");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mounted, setMounted] = useState(false);
    const location = useLocation()
    const products = location.state
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [selectColor, setSelectColor] = useState(product.colors[0])
    const [selectBtn, setSelectBtn] = useState(product.buttons[0])
    const [number, setNumber] = useState(0)
    const [sliderRef, instanceRef] = useKeenSlider({
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        slides: { perView: 1 },
        initial: 0,
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderContent = () => {
        if (activeTab === "ProductDetails") {
            return <Detail />;
        } else if (activeTab === "Rating&Reviews") {
            return <Reviews />
        } else if (activeTab === "FAQs") {
            return <p>Bu yerda barcha to‘liq tafsilotlar va tavsiflar mavjud.</p>;
        }
    };

    const goToSlide = (idx) => {
        instanceRef.current?.moveToIdx(idx);
    };

    const plusBtn = () => {
        setNumber(number + 1)

    }
    const minusBtn = () => {
        setNumber(number - 1)

    }
    return (
        <div className="px-[120px]">
            <div className="flex flex-col lg:flex-row pt-10 overflow-hidden">
                {/* Left Half: Thumbnails + Slider */}
                <div className="flex flex-col md:flex-row  lg:w-1/2 w-full">
                    {/* Thumbnails */}
                    <div className="flex md:flex-col gap-2 md:gap-3">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumb-${idx}`}
                                onClick={() => goToSlide(idx)}
                                className={`w-43 h-43 object-cover cursor-pointer rounded-[12px] border ${currentSlide === idx ? "border-blue-800" : "border-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Slider */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        {mounted && (
                            <div
                                ref={sliderRef}
                                className="keen-slider w-full max-w-[400px] bg-[#F0EEED] aspect-[3/4] rounded-[12px] shadow overflow-hidden"
                            >
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="keen-slider__slide flex items-center justify-center"
                                    >
                                        <img
                                            src={img}
                                            alt={`slide-${idx}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Dots for mobile */}
                        <div className="flex md:hidden justify-center gap-2 mt-4">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Right Half: Product Details */}
                <div className="`">
                    <h1 className=" text-[40px] font-bold mt-[10px]">{product.txt}</h1>
                    <StarRating />
                    <div className=" flex items-center gap-5 mt-[10px]">
                        <h1 className=" text-[32px] font-bold">$260</h1>
                        <s className=" text-black/30 text-[32px] font-bold">$300</s>
                        <button className=" text-[#FF3333] text-[16px] font-medium rounded-[62px] bg-[#F0F0F0] pl-[14px] pt-[6px] pb-[6px] pr-[14px]">-40%</button>
                    </div>
                    <h1 className=" text-[16px]  mt-[10px]  w-[62%]">
                        {product.descrition}
                    </h1>
                    <button className=" mt-[20px] border-1 w-full border-black/10 border-l-0 border-r-0 px-[0px] py-[20px]">
                        <h1 className=" text-left text-black/60">Select Colors</h1>
                        <div className=" flex items-center gap-5 mt-[10px]">
                            {product.colors.map((item, index) => {
                                return (
                                    <button onClick={() => setSelectColor(item)} key={index} style={{ background: item, outline: selectColor === item ? "1px solid black" : "none" }} className=" rounded-[40px] w-[34px] h-[34px]  " >
                                        <h1 style={{ display: selectColor === item ? "block" : "none" }} className=" text-white text-center">
                                            <BiCheck className=" text-[20px] w-[34px] h-[34px]" />
                                        </h1>
                                    </button>
                                )
                            })}

                        </div>
                    </button>
                    <button className=" mt-[0px] border-1 w-full border-black/10 border-l-0 border-r-0 px-[0px] py-[20px]">
                        <h1 className=" text-left text-black/60">Choose Size</h1>
                        <div className=" flex items-center gap-5 mt-[10px]">
                            {product.buttons.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => setSelectBtn(item)} style={{ background: selectBtn === item ? "black" : "", color: selectBtn === item ? "white" : "black" }} className="  text-[16px]  rounded-[62px] bg-[#F0F0F0] pl-[24px] pt-[12px] pb-[12px] pr-[24px]"> {item}</button>
                                )
                            }
                            )}
                        </div>

                    </button>
                    <div className=" flex gap-[20px] mt-[20px]">
                        <button className=" flex items-center gap-[20px] text-[20px] bg-[#F0F0F0] rounded-[62px]   pt-[16px] pb-[16px] pl-[40px] pr-[40px] ">
                            <button onClick={minusBtn}> <BiMinus /> </button>
                            <h1>{number}</h1>
                            <button onClick={plusBtn}> <BiPlus /> </button>
                        </button>
                        <button className=" text-white bg-black rounded-[62px] font-medium pl-[54px] pr-[54px] pt-[16px] pb-[16px] w-full" > Add to Cart</button>
                    </div>

                </div>
            </div>

            <div className=" flex items-center justify-between  mt-[60px]">
                <button style={{ borderBottom: activeTab === "ProductDetails" ? "2px solid black" : "", }} className="text-[22px]  w-full border-b-1 border-black/10 " onClick={() => setActiveTab("ProductDetails")}>Product Details</button>
                <button style={{ borderBottom: activeTab === "Rating&Reviews" ? "2px solid black" : "", }} className="text-[22px] w-full border-b-1 border-black/10" onClick={() => setActiveTab("Rating&Reviews")}>Rating & Reviews</button>
                <button style={{ borderBottom: activeTab === "FAQs" ? "2px solid black" : "", }} className="text-[22px] w-full  border-b-1 border-black/10" onClick={() => setActiveTab("FAQs")}>FAQs</button>

                {/* <h1 className=" text-[22px] border-b-1 w-full text-center border-black/10  text-black/60"></h1>
                <h1 className=" text-[22px]  border-b-2 w-full  text-center"></h1>
                <h1 className=" text-[22px]  border-b-1 w-full  text-center  border-black/10  text-black/60"></h1> */}
            </div>
            <div className=" ">
                {renderContent()}
            </div>
        </div>
    );
}

