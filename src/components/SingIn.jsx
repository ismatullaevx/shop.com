import React, { useState } from 'react'
import { useNavigate } from 'react-router'
export default function SingIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoginned, setLoginned] = useState(false)

  const forgot = () => {
    
    navigate("/email")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const loginned = localStorage.getItem('logginned');
    if (email === savedEmail && password === savedPassword) {

      navigate('/')
    } else {

      alert("Email yoki parol noto'g'ri!");
    }
  };






  return (
    <div className="flex items-center justify-center">
      <div className="rounded-2xl p-[20px]">
        <form onSubmit={(e) => {
          handleSubmit(e);
        }}>
          <img src="/src/assets/img/2.png" alt="" />
          <h1 className="flex justify-center text-center text-[#525252] text-[30px] font-bold">
            SHOP.CO
          </h1>
          <p className="flex text-center text-[15px] text-[#525252]">
            See what is going on with your business
          </p>
          <div>
            <label className="text-[#525252] text-[15px]">Email</label>
          </div>
          <input
            className="flex justify-center gap-2 bg-white border border-[#DED2D9] p-[5px] w-full mt-[10px]"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-[10px]">
            <label className="text-[#525252] text-[15px]">Password</label>
          </div>
          <input
            className="flex justify-center gap-2 bg-white border border-[#DED2D9] p-[5px] w-full mt-[10px]"
            type="password"
            placeholder="pin"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-between">
            <div className="flex text-center gap-2 mt-[10px]">
              <input type="checkbox" />


              <p className="text-[12px] text-[#525252]">Remember Me</p>
            </div>
            <div className="flex text-center gap-2 mt-[10px]">
              <p className="flex text-center text-[12px] font-bold text-[#7F265B]" onClick={() => {
                forgot()
              }}>
                Forgot Password?
              </p>
            </div>
          </div>


          <button
            type="submit"
            className="flex justify-center gap-2 bg-[#7F265B] text-white rounded-lg p-[10px] w-full mt-[20px] hover:cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
