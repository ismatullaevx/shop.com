import React, { useState } from 'react';
import profile from '../assets/imgs/profile.png'
import { MdEmail } from 'react-icons/md';
import { PiPen, PiPenBold, PiPencil, PiPencilCircle, PiPenDuotone } from 'react-icons/pi';
import { TiKey, TiTicket } from 'react-icons/ti';
import { CgCheck } from 'react-icons/cg';
const Profile = () => {
    const uName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("userEmail");
    const uFullName = localStorage.getItem("userFullName");
    const savedEmail2 = localStorage.getItem("Gender");
    const savedEmail3 = localStorage.getItem("Language");
    const savedEmail4 = localStorage.getItem("NickName");
    const savedEmail5 = localStorage.getItem("Country");
    const savedEmail6 = localStorage.getItem("SetZona");
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState(savedEmail2 || "");
    const [language, setLanguage] = useState(savedEmail3 || "");
    const [nickName, setNickName] = useState("");
    const [country, setCountry] = useState(savedEmail5 || "");
    const [timeZone, setTimeZone] = useState(savedEmail6 || "");
    const [isDiss, setDiss] = useState(true)
    function profileInf(e) {
        e.preventDefault();
        localStorage.setItem("userFullName", fullName);
        localStorage.setItem("Gender", gender);
        localStorage.setItem("Language", language);
        localStorage.setItem("NickName", nickName);
        localStorage.setItem("Country", country);
        localStorage.setItem("SetZona", timeZone);


        if (uFullName === fullName && savedEmail2 === gender && savedEmail3 === language && savedEmail4 === nickName && savedEmail5 === country && savedEmail6 === timeZone) {
            alert("O'zgardi")
        }
        else {
            alert('false')
        }
    }
    console.log();

    return (
        <form onSubmit={(e) => { profileInf(e) }} className=' w-full bg-white px-[20px] lg:px-[120px]'>
            <div className=' flex items-center justify-between'>
                <div className=' flex items-center  gap-[20px]'>
                    <div>
                        <img src={profile} alt="" className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-[60px]' />
                    </div>
                    <div>
                        <h1 className=' font-[500] text-[22px]'>{uName}</h1>
                        <p className=' font-[400] text-[18px]'>{savedEmail}</p>
                    </div>
                </div>
                <div className='lg:hidden block'>
                    {isDiss ? <PiPencil className=' text-[25px]' onClick={() => {
                        setDiss(false);
                    }} /> : <CgCheck className=' text-[35px]' onClick={() => {
                        setDiss(true)
                    }} />
                    }
                </div>

                <div className=' lg:block hidden'>
                    {isDiss ? <button onClick={() => {
                        setDiss(false);

                    }} type='submit' className='py-[15px] px-[50px] bg-black text-white text-[18px] font-[500] rounded-[8px] cursor-pointer'>Edit</button> : <button onClick={() => {
                        setDiss(true);
                    }} type='button' className='py-[15px] px-[50px] bg-black text-white text-[18px] font-[500] rounded-[8px] cursor-pointer'>Done</button>}
                </div>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[40px]'>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Full Name</p>
                    <input defaultValue={uFullName} type="text" disabled={isDiss ? true : false} placeholder='Full name' className=' bg-[#F9F9F9] w-full outline-none p-[20px] rounded-2xl text-[20px] mt-[10px]' onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Gender</p>
                    <select
                        disabled={isDiss ? true : false}
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className=' text-[20px] bg-[#F9F9F9] w-full outline-none rounded-2xl p-[20px] mt-[10px]'
                        defaultValue={savedEmail2}
                    >
                        <option value="">Select Gender</option>
                        <option value="woman">Woman</option>
                        <option value="man">Man</option>
                        <option value="other">Others</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Language</p>
                    <select
                        disabled={isDiss ? true : false}
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className=' text-[20px] bg-[#F9F9F9] w-full outline-none rounded-2xl p-[20px] mt-[10px]'
                        defaultValue={savedEmail3}
                    >
                        <option value="">Select Language</option>
                        <option value="english">English</option>
                        <option value="russian">Russian</option>
                        <option value="uzbek">Uzbek</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Nick Name</p>
                    <input type="text" disabled={isDiss ? true : false} placeholder='Nick Name' className=' bg-[#F9F9F9] w-full outline-none p-[20px] rounded-2xl text-[20px] mt-[10px]' onChange={(e) => setNickName(e.target.value)} defaultValue={savedEmail4} />
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Country</p>
                    <select
                        disabled={isDiss ? true : false}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className=' text-[20px] bg-[#F9F9F9] w-full outline-none rounded-2xl p-[20px] mt-[10px]'
                        defaultValue={savedEmail5}
                    >
                        <option value="">Select Country</option>
                        <option value="usa">USA</option>
                        <option value="uzbekistan">Uzbekistan</option>
                        <option value="russia">Russia</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Time Zone</p>
                    <select
                        disabled={isDiss ? true : false}
                        value={timeZone}
                        onChange={(e) => setTimeZone(e.target.value)}
                        className=' text-[20px] bg-[#F9F9F9] w-full outline-none rounded-2xl p-[20px] mt-[10px]'
                        defaultValue={savedEmail6}
                    >
                        <option value="">Select Time Zone</option>
                        <option value="UTC+2">UTC+2</option>
                        <option value="UTC+5">UTC+5</option>
                        <option value="UTC+10">UTC+10</option>
                    </select>
                </div>
            </div>
            <div>
                <p className=' text-[20px] font-[600] mt-5'>My email Address</p>
                <div className=' flex gap-[20px] mt-[20px]'>
                    <button className=' bg-purple-300 p-[20px] rounded-[40px]'>
                        <MdEmail fontSize={'25px'} />
                    </button>
                    <div>
                        <h1 className='font-[500] text-[18px]'>{savedEmail}</h1>
                        <h1>1 month ago</h1>
                    </div>

                </div>
            </div>
        </form>
    );
}

export default Profile;
