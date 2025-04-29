const Header = () => {
    return(
        <div className="grid w-full h-auto pb-64 lg:p-0 lg:h-screen bg-Bg1">
            <div className="container grid gap-10 lg:gap-5 lg:flex mt-16 w-10/12 max-h-[500px]">
                {/* معرفی */}
                <div className="grid w-full h-full py-0 lg:pt-20 px-0 lg:px-14 lg:text-right text-center">
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl pb-8 text-Brand2">تعمیرکار تلوزیون</h1>
                    <p className="text-lg leading-10 text-white">سلام <br/> من <span className="text-Brand2"> مازیار رحمانی </span> هستم <br/> تعمیرکار تلوزیونهای سونی , سامسونگ , ال جی و انواع برند های ایرانی و خارجی در سریع ترین زمان </p>
                </div>
                {/* عکس */}
                <div className="flex item-center justify-center">
                    <div className="w-[250px] lg:w-4/5 h-[430px] lg:h-full max-h-[500px] border-2 border-white rounded-lg rounded-tl-[200px] rounded-br-[200px] overflow-hidden">
                        <img className="w-full h-full object-center object-cover" src="image/header/photo.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header