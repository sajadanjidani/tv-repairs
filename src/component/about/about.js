const About = () => {
    return(
        <div className="grid gap-16 md:gap-0 lg:flex w-full h-auto py-10 md:py-0 md:h-screen bg-Bg2">
            <div className="flex justify-center items-center w-full md:w-11/12 lg:w-1/3 h-full mx-auto">
                <div className="w-4/5 h-[260px] min-h-[260px] bg-green-700 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-center object-cover" src="image/about/image.jpg" alt="TVrepairs"/>
                </div>
            </div>
            <div className="grid justify-center items-center w-full md:w-11/12 lg:w-2/3 h-full mx-auto">
                <div className="px-10 md:pl-20">
                    <span className="py-5 px-10 text-white text-xl bg-Bg1 border-4 border-Brand1 rounded-tl-[40px] rounded-br-[40px]">درباره من</span>
                    <div className="bg-Bg1 rounded-[40px] p-12">
                        <h1 className="text-Brand2">سلام !</h1>
                        <p className="text-white leading-10 text-justify">من <span className="text-Brand2">مازیار رحمانی</span> بیش از 10 سال است که در حوضه تعمیرات تلویزیون فعالیت دارم . خدمات بنده در محل فقط در تهران و کرج است و با ضمانت قطعات , قطعات اورجینال با گارانتی 3 تا 6 ماه کار خود را تضمین میکنم .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About