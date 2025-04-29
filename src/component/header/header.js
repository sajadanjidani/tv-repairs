const Header = () => {
    return(
        <div className="grid w-full h-screen bg-Bg1">
            <div className="container grid gap-5 lg:flex mt-16 w-10/12 max-h-[500px]">
                {/* امار و ارقام */}
                <div className="hidden xl:block relative w-3/12 h-full">
                    <ul className="absolute bottom-0 grid text-white w-9/12 gap-10 py-14 px-10 bg-Bg2 rounded-[80px]">
                        <li>
                            <span><span className="text-Brand1">10</span> سال تجربه </span>
                        </li>
                        <li>
                            <span><span className="text-Brand1">10</span> مشتری </span>
                        </li>
                        <li>
                            <span><span className="text-Brand1">10</span> مشتری راضی</span>
                        </li>
                    </ul>
                </div>
                {/* معرفی */}
                <div className="grid w-full lg:w-8/12 xl:w-5/12 h-full py-0 lg:pt-20 px-0 lg:px-14">
                    <h1 className="text-3xl pb-8 lg:text-5xl text-Brand2">تعمیرکار تلوزیون</h1>
                    <p className="text-lg leading-10 text-white">سلام <br/> من <span className="text-Brand2"> مازیار رحمانی </span> هستم <br/> تعمیرکار تلوزیونهای سونی , سامسونگ , ال جی و انواع برند های ایرانی و خارجی در سریع ترین زمان </p>
                </div>
                {/* عکس */}
                <div className="flex item-center justify-center w-4/5 md:w-[500px] lg:w-4/12 h-4/5 md:h-full mx-auto min-w-[320px] min-h-[320px] pb-10 md:pb-0">
                    <div className="lg:w-4/5 max-h-[500px] border-2 border-white rounded-lg md:rounded-tl-[200px] md:rounded-br-[200px] overflow-hidden">
                        <img className="w-full h-full object-center object-cover" src="image/header/photo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header