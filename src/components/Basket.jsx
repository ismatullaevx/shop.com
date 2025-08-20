import { useLocation } from "react-router"

export default function Basket() {
    const location = useLocation()
    const products = location.state
    console.log(products);
    return (
        <div>
            {products.slice(0, 1).map((item) => (
                <div key={item.id}>
                    <div>
                        <img className="w-[100px]" src={item.img} alt="" />
                    </div>

                    <div>
                        <h1>{item.txt}</h1>
                        {buttons.map((button, index) => (
                            <h1 key={index}>{index.buttons}</h1>
                        ))}
                        <h1></h1>
                    </div>
                </div>
            ))}
        </div>
    )
}
