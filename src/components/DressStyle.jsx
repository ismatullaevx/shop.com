const DressStyle = () => {
    return (
        <div className=' px-[20px] lg:px-[120px] lg:mt-[60px] '>
            <div className=' bg-[#F0F0F0] p-[20px] lg:p-[70px] rounded-[40px]'>
                <h1 className=' text-[48px] font-bold text-center'>BROWSE BY DRESS STYLE</h1>
                <div className=" block lg:flex items-center lg:justify-between">
                    <div className="bgImg"  >
                        <h1 className=" text-[36px] font-bold">Casual</h1>
                    </div>
                    <div className="bgImg2">
                        <h1 className=" text-[36px] font-bold">Formal</h1>
                    </div>
                </div>
                <div className=" block lg:flex items-center justify-between">
                    <div className="bgImg3"  >
                        <h1 className=" text-[36px] font-bold">Party</h1>
                    </div>
                    <div className="bgImg4">
                        <h1 className=" text-[36px] font-bold">Gym</h1>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default DressStyle;
