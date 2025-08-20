import { useState } from "react";

export default function SingUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [isActive, setInActive] = useState(false)

    


    function handleSignUp(e) {
        e.preventDefault();
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        localStorage.setItem("conUserPassword", confirmPassword);
        localStorage.setItem("username", name);

        window.location.reload();


        if (email !== "" && password !== "") {
            setInActive(!isActive);
            localStorage.setItem("active", true);
            console.log(isActive);
        }
    }







    return (
        <div>
            <div className="  rounded-2xl p-[20px]  ">
                <form onSubmit={(e) => {
                    handleSignUp(e)
                }}>
                    <img src="/src/assets/img/2.png" alt="" />
                    <h1 className="flex justify-center text-center text-[#525252] text-[30px] font-bold">
                        SHOP.CO
                    </h1>
                    <p className="flex text-center text-[15px] text-[#525252]">
                        See what is going on with your business
                    </p>
                    <a href="">
                    </a>

                    <div className=" mt-[10px]">
                        <label for="" className="text-[#525252] text-[15px]">UserName</label>
                    </div>
                    <input
                        className="flex justify-center gap-2 bg-white border-1 border-[#DED2D9] p-[5px] w-full mt-[10px]"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <div className=" mt-[10px]">
                        <label for="" className="text-[#525252] text-[15px]">Email</label>
                    </div>
                    <input
                        className="flex justify-center gap-2 bg-white border-1 border-[#DED2D9] p-[5px] w-full mt-[10px]"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="mt-[10px]">
                        <label className="text-[#525252] text-[15px]" for="">Password</label>
                    </div>
                    <input
                        className="flex justify-center gap-2 bg-white border-1 border-[#DED2D9] p-[5px] w-full mt-[10px]"
                        type="password"
                        name=""
                        id=""
                        placeholder="pin"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="mt-[10px]">
                        <label className="text-[#525252] text-[15px]" for="">Confirm Password</label>
                    </div>
                    <input
                        className="flex justify-center gap-2 bg-white border-1 border-[#DED2D9] p-[5px] w-full mt-[10px]"
                        type="password"
                        name=""
                        id=""
                        placeholder="pin"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="flex justify-between">
                        <div className="flex text-center gap-2 mt-[10px]">
                            <input
                                type="checkbox"
                                className=""
                                name=""
                                id=""
                                placeholder="Remember Me"
                            />
                            <p className="text-[12px] text-[#525252]">Remember Me</p>
                        </div>
                        <div className="flex text-center gap-2 mt-[10px]">
                            <p className="flex text-center text-[12px] font-bold text-[#7F265B]">
                                Forgot Password?
                            </p>
                        </div>
                    </div>
                    <button type="submit"
                        className="flex justify-center gap-2 bg-[#7F265B] border-1 text-white rounded-lg border-[#DED2D9] p-[10px] w-full mt-[20px] hover:cursor-pointer"
                    >
                        Sign up
                    </button>
                    <div className="flex items-center justify-center mt-[20%] gap-2">
                        <p className="flex text-center justify-center text-[12px] font-medium text-[#525252]" >
                            Already Registered ?
                        </p>

                    </div>
                </form>
            </div>
        </div>
    )
}
