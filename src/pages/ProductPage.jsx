// src/pages/ProductPage.jsx
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Импортируем уникальные изображения
import tshirtMain from "../assets/imgs/Tshirt.png";
import tshirtBack from "../assets/imgs/Tshirt.png";
import tshirtDetail from "../assets/imgs/Tshirt.png";
import { StarRating } from "../components/star";
import { BiCheck, BiMinus, BiPlus } from "react-icons/bi";
import { NavLink, useNavigate, useParams } from "react-router"; // Добавили useNavigate
import Reviews from "../components/Reviews";
import Detail from "../components/Detail";
import CalculatedDiscount from "../components/CalculatedDiscount";
import { useCart } from "../context/CartContext";

// Фиктивный массив данных, чтобы страница работала без location.state
const mockProducts = [
    {
        id: 1,
        txt: "T-SHIRT WITH TAPE DETAILS",
        cost: 29.99,
        descrition: "",
        colors: ["#000000", "#1E90FF", "#FFD700"],
        buttons: ["S", "M", "L", "XL"],
        images: [tshirtMain, tshirtBack, tshirtDetail], // Используем уникальные изображения
    },
    {
        id: 2,
        txt: "Другой товар",
        cost: 50.00,
        descrition: "Описание другого товара.",
        colors: ["#FF0000", "#00FF00"],
        buttons: ["XS", "S", "M"],
        images: [tshirtMain, tshirtBack],
    },
];

export default function ProductPage() {
    const { addToCart } = useCart();
    const { id } = useParams();
    const product = mockProducts.find((p) => p.id === parseInt(id));
    const [activeTab, setActiveTab] = useState("Rating&Reviews");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [selectColor, setSelectColor] = useState(product.colors[0]);
    const [selectBtn, setSelectBtn] = useState(product.buttons[0]);
    const [quantity, setQuantity] = useState(1); // Изменил `number` на `quantity` и установил начальное значение 1
    const [sliderRef, instanceRef] = useKeenSlider({
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        slides: { perView: 1 },
        initial: 0,
    });

    const navigate = useNavigate(); // Получаем функцию navigate

    // Ищем товар в фиктивных данных. `parseInt(id)` преобразует строку в число.

    useEffect(() => {
        setMounted(true);
    }, []);

    // Защита от прямого захода на страницу или обновления
    useEffect(() => {
        if (!product) {
            navigate("/"); // Перенаправляем на главную, если товар не найден
        }
    }, [product, navigate]);

    // Если товар еще не загружен или не найден, показываем сообщение и выходим
    if (!product) {
        return <div>Товар не найден. Перенаправление на главную...</div>;
    }

    const renderContent = () => {
        if (activeTab === "ProductDetails") {
            return <Detail />;
        } else if (activeTab === "Rating&Reviews") {
            return <Reviews />;
        } else if (activeTab === "FAQs") {
            return <p>Здесь будут ответы на часто задаваемые вопросы.</p>;
        }
    };

    const goToSlide = (idx) => {
        instanceRef.current?.moveToIdx(idx);
    };

    // Обновленные функции для управления количеством
    const plusBtn = () => {
        setQuantity(prev => prev + 1);
    };

    const minusBtn = () => {
        setQuantity(prev => Math.max(1, prev - 1)); // Не даем количеству уйти ниже 1
    };

    const handleAddToCart = () => {
        // Убедимся, что количество больше 0
        if (quantity < 1) {
            alert("Количество должно быть не меньше 1.");
            return;
        }

        const itemToAdd = {
            id: product.id,
            name: product.txt,
            price: product.cost,
            image: product.images[0],
            color: selectColor,
            size: selectBtn,
            quantity: quantity,
        };
        addToCart(itemToAdd);
        alert(`Товар "${itemToAdd.name}" добавлен в корзину!`);
    };

    return (
        <div className="px-[20px] lg:px-[120px]">
            <div className="flex flex-col lg:flex-row pt-10 overflow-hidden">
                {/* Left Half: Thumbnails + Slider */}
                <div className="flex flex-col md:flex-row lg:w-1/2 w-full">
                    {/* Thumbnails */}
                    <div className="hidden lg:flex md:flex-col gap-2 md:gap-3">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`thumb-${idx}`}
                                onClick={() => goToSlide(idx)}
                                className={`w-[100px] h-[100px] object-cover rounded-md cursor-pointer transition ${currentSlide === idx ? "outline outline-black" : "outline-transparent"
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
                                {product.images.map((img, idx) => (
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
                            {product.images.map((_, idx) => (
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
                <div className="lg:w-1/2 lg:pl-10">
                    <h1 className="text-[25px] lg:text-[40px] font-bold mt-[10px]">{product.txt}</h1>
                    <StarRating />
                    <CalculatedDiscount price={product.cost} discount={20} />
                    <h1 className="lg:text-[16px] mt-[10px] lg:w-[62%]">
                        {product.descrition}
                    </h1>
                    <div className="mt-[20px] border-y border-black/10 py-[20px]">
                        <h1 className="text-left text-black/60">Select Colors</h1>
                        <div className="flex items-center gap-5 mt-[10px]">
                            {product.colors.map((item, index) => (
                                <button
                                    onClick={() => setSelectColor(item)}
                                    key={index}
                                    style={{ background: item, outline: selectColor === item ? "" : "none" }}
                                    className="  rounded-[40px] w-[40px] h-[40px]"
                                >
                                    {selectColor === item && (
                                        <div className="text-white text-center flex items-center justify-center h-full w-full">
                                            <BiCheck className="text-[30px]" />
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-0 border-y border-black/10 py-[20px]">
                        <h1 className="text-left text-black/60">Choose Size</h1>
                        <div className="flex items-center  gap-5 mt-[10px]">
                            {product.buttons.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectBtn(item)}
                                    style={{ background: selectBtn === item ? "black" : "", color: selectBtn === item ? "white" : "black" }}
                                    className="lg:text-[16px] text-[12px] rounded-[62px] bg-[#F0F0F0] px-[24px] py-[12px]"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-[20px] mt-[20px]">
                        <div className="flex items-center gap-[20px] text-[20px] bg-[#F0F0F0] rounded-[62px] py-[16px] px-[40px]">
                            <button onClick={minusBtn}> <BiMinus /> </button>
                            <h1>{quantity}</h1>
                            <button onClick={plusBtn}> <BiPlus /> </button>
                        </div>
                        <NavLink to={"/basket"} onClick={handleAddToCart} className="text-center text-white bg-black rounded-[62px] font-medium py-[16px] w-full" > Add to Cart</NavLink>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-[60px]">
                <button
                    style={{ borderBottom: activeTab === "ProductDetails" ? "2px solid black" : "", }}
                    className="lg:text-[22px] w-full border-b-1 border-black/10"
                    onClick={() => setActiveTab("ProductDetails")}>
                    Product Details
                </button>
                <button
                    style={{ borderBottom: activeTab === "Rating&Reviews" ? "2px solid black" : "", }}
                    className="lg:text-[22px] w-full border-b-1 border-black/10"
                    onClick={() => setActiveTab("Rating&Reviews")}>
                    Rating & Reviews
                </button>
                <button
                    style={{ borderBottom: activeTab === "FAQs" ? "2px solid black" : "", }}
                    className="lg:text-[22px] w-full border-b-1 border-black/10"
                    onClick={() => setActiveTab("FAQs")}>
                    FAQs
                </button>
            </div>
            <div className=" ">
                {renderContent()}
            </div>
        </div >
    );
}