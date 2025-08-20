import React, { useState } from 'react';
import profile from '../assets/imgs/profile.png'
import { MdEmail } from 'react-icons/md';
const Profile = () => {
    const uName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("userEmail");
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState("");
    const [nickName, setNickName] = useState("");
    const [country, setCountry] = useState("");
    const [timeZone, setTimeZone] = useState("");
    function profileInf(e) {
        e.preventDefault();
        localStorage.setItem("userFullName", fullName);
        localStorage.setItem("Gender", gender);
        localStorage.setItem("Language", language);
        localStorage.setItem("NickName", nickName);
        localStorage.setItem("Country", country);
        localStorage.setItem("SetZona", timeZone);
    }
    return (
        <div className=' w-full bg-white px-[120px]'>
            <div className=' flex items-center justify-between'>
                <div className=' flex items-center  gap-[20px]'>
                    <div>
                        <img src={profile} alt="" className='w-[100px] h-[100px] rounded-[60px]' />
                    </div>
                    <div>
                        <h1 className=' font-[500] text-[22px]'>{uName}</h1>
                        <p className=' font-[400] text-[18px]'>{savedEmail}</p>
                    </div>
                </div>
                <div>
                    <button type='submit' className='py-[15px] px-[50px] bg-black text-white text-[18px] font-[500] rounded-[8px] cursor-pointer'>Edit</button>
                </div>
            </div>
            <form onSubmit={(e) => { profileInf(e) }} className=' grid grid-cols-2 gap-[40px]'>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Full Name</p>
                    <input disabled type="text" placeholder='Full name' className=' bg-[#F9F9F9] w-full outline-none p-[20px] rounded-2xl text-[20px] mt-[10px]' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Gender</p>
                    <select name="" id="" className=' text-[20px] bg-[#F9F9F9]  w-full outline-none rounded-2xl p-[20px]  mt-[10px]' value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="" >Woman</option>
                        <option value="">Man</option>
                        <option value="">Others</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Language</p>
                    <select name="" id="" className=' text-[20px] bg-[#F9F9F9]  w-full outline-none rounded-2xl p-[20px]  mt-[10px]  ' value={language} onChange={(e) => setLanguage(e.target.value)} >
                        <option value="" >English</option>
                        <option value="">Russian</option>
                        <option value="">Uzbek</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Nick Name</p>
                    <input type="text" placeholder='Nick Name' className=' bg-[#F9F9F9] w-full outline-none p-[20px] rounded-2xl text-[20px] mt-[10px]' value={nickName} onChange={(e) => setNickName(e.target.value)} />
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Country</p>
                    <select name="" id="" className=' text-[20px] bg-[#F9F9F9]  w-full outline-none rounded-2xl p-[20px]  mt-[10px]' value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="" >Usa</option>
                        <option value="">Uzbekistan </option>
                        <option value="">Russia</option>
                    </select>
                </div>
                <div>
                    <p className=' text-[20px] font-[600] mt-5'>Time Zone</p>
                    <select name="" id="" className=' text-[20px] bg-[#F9F9F9]  w-full outline-none rounded-2xl p-[20px]  mt-[10px]' value={timeZone} onChange={(e) => setTimeZone(e.target.value)} >
                        <option value="" >UTC+2 </option>
                        <option value=""> UTC+5</option>
                        <option value="">UTC+10</option>
                    </select>
                </div>
            </form>


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
        </div>
    );
}

export default Profile;
