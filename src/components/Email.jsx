import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Email = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [isPassword2, setPasword2] = useState("")
    const [isConfirmPassword2, setConfirmPassword2] = useState("")
    const [isPassword, setPasword] = useState(true)
    const [isConfirmPassword, setConfirmPassword] = useState(true)
    const [error, setError] = useState(false)
    const uEmail = localStorage.getItem("userEmail");


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userPassword", isPassword2);
        localStorage.setItem("conUserPassword", isConfirmPassword2);
        setError(false)
        if (email === uEmail && isConfirmPassword2) {
            navigate("/");
        }
        else if (email === uEmail) {
            setPasword(false)
            setConfirmPassword(false)
        }
        else {
            setError(true)
            setPasword(true)
            setConfirmPassword(true)
        }
    }




    return (
        <div className="flex items-center  h-[100vh] justify-center">
            <div className="rounded-2xl p-[40px] border-2 border-[#F0F0F0]">
                <form onSubmit={(e) => {
                    handleSubmit(e);

                }}>
                    <img src="/src/assets/img/2.png" alt="" />
                    <h1 className="flex justify-center text-center text-[#525252] text-[30px] font-bold">
                        SHOP.CO
                    </h1>



                    <div>
                        <label className="text-[#525252] text-[15px]">Email</label>
                    </div>

                    <input
                        className="flex justify-center gap-2 bg-white border border-[#DED2D9] p-[5px] w-full mt-[10px]"
                        type="text"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {error ? <p className='text-xl text-center text-red-600 my-10'>Password isn't correct</p> : <p></p>}
                    {isPassword ? <div></div> : <div>
                        <input
                            className="flex justify-center gap-2 bg-white border border-[#DED2D9] p-[5px] w-full mt-[10px]"
                            type="password"
                            placeholder="password"
                            onChange={(e) => setPasword2(e.target.value)}
                        />
                    </div>}
                    {isConfirmPassword ? <div></div> : <div>
                        <input
                            style={{ border: isPassword2 === isConfirmPassword2 ? "4px solid green" : "4px red solid  " }}
                            className="flex justify-center gap-2 bg-white border  border-none border-[#DED2D9] p-[5px] w-full mt-[10px]"
                            type="password"
                            placeholder="password"
                            onChange={(e) => setConfirmPassword2(e.target.value)}
                        />
                    </div>}
                    <button
                        type="submit"
                        className="flex justify-center gap-2 bg-[#7F265B] text-white rounded-lg p-[10px] w-full mt-[20px] hover:cursor-pointer"

                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Email;
