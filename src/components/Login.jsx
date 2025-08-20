import { useState } from "react";
import SingIn from "./SingIn";
import SingUp from "./SingUp";
export default function Login() {
  const [activeTab, setActiveTab] = useState("Sing In")

  const renderContent = () => {
    if (activeTab === "Sing In") {
      return <SingIn />
    }
    else if (activeTab === "Sing Up") {
      return <SingUp />
    }
  };

  return (
    <div className=" flex items-center  h-[100vh] justify-center ">
      <div className=" border-2 border-[#F0F0F0]  p-[10px] rounded-2xl">
        <div className=" flex justify-center gap-5 p-[10px]">
          <button style={{ borderBottom: activeTab === "Sing In" ? "2px solid #7F265B" : "", }} className="text-[22px]   border-b-1 border-black/10 hover:cursor-pointer" onClick={() => setActiveTab("Sing In")}>Sing In</button>
          <button style={{ borderBottom: activeTab === "Sing Up" ? "2px solid #7F265B" : "", }} className="text-[22px]  border-b-1 border-black/10 " onClick={() => setActiveTab("Sing Up")}>Sing Up</button>
        </div>
        {renderContent()}
      </div>
    </div>


  )
}
