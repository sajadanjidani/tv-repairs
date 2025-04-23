const Header = () => {
    return(
        <div className="grid w-full h-screen bg-Bg1">
            <div className="container flex mt-16 w-10/12 max-h-[500px]">
                {/* امار و ارقام */}
                <div className="relative w-3/12 h-full">
                    <ul className="absolute bottom-0 grid text-white w-9/12 gap-10 py-14 px-12 bg-Bg2 rounded-[80px]">
                        <li>
                            <span> 8 سال تجربه </span>
                        </li>
                        <li>
                            <span> 8 مشتری </span>
                        </li>
                        <li>
                            <span>8 مشتری راضی</span>
                        </li>
                    </ul>
                </div>
                {/* معرفی */}
                <div className="grid w-5/12 h-full pt-20 px-14">
                    <h1 className="text-5xl text-Brand2">تعمیرکار تلوزیون</h1>
                    <p className="text-xl leading-10 text-white">سلام <br/> من <span className="text-Brand2"> مازیار رحمانی </span> هستم <br/> تعمیرکار تلوزیون</p>
                </div>
                {/* عکس */}
                <div className="flex item-center w-4/12 h-full">
                    <div className="w-4/5 max-h-[500px] border-2 border-white rounded-tl-[200px] rounded-br-[200px] overflow-hidden">
                        <img className="w-full h-full object-center object-cover" src="image/header/photo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header