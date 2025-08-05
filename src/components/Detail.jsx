import { useState } from "react";
import ProductPage from "../pages/ProductPage";

export default function Detail() {
    const [tab, setTab] = useState("1")

    const contect = () => {
        if (tab === "1") {
            return (
                <p>1</p>
            )
        } else if (tab === "2") {
            return (
                <p>2</p>
            )
        }
        else if (tab === "3") {
            return (
                <p>3</p>
            )
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <button style={{ backgroundColor: tab === "1" ? "red" : "green" }} className="p-[20px]" onClick={() => setTab("1")}>1</button>
                <button style={{ backgroundColor: tab === "2" ? "red" : "green" }} className="p-[20px]" onClick={() => setTab("2")}>2</button>
                <button style={{ backgroundColor: tab === "3" ? "red" : "green" }} className="p-[20px]" onClick={() => setTab("3")}>3</button>
            </div>
            <div>
                {contect()}
            </div>
        </div>

    )
}


