const About = () => {
    return(
        <div className="flex w-full h-screen bg-Bg2">
            <div className="flex justify-center items-center w-1/3 h-full">
                <div className="w-4/5 h-[260px] min-h-[260px] bg-green-700 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-center object-cover" src="image/about/image.jpg" alt="TVrepairs"/>
                </div>
            </div>
            <div className="grid justify-center items-center w-2/3 h-full">
                <div className="px-20">
                    <span className="py-5 px-10 text-white text-xl bg-Bg1 border-4 border-Brand1 rounded-tl-[40px] rounded-br-[40px]">درباره من</span>
                    <div className="bg-Bg1 rounded-[40px] p-12">
                        <h1 className="text-Brand2">سلام !</h1>
                        <p className="text-white leading-10">من <span className="text-Brand2">مازیار رحمانی</span> بیش از 2 سال و 3 ماه است که در حوضه تعمیرات تلویزیون فعالیت دارم . خدمات بنده در محل فقط در تهران است و با ضمانت قطعات , قطعات اورجینال با گارانتی 3 تا 6 ماه کار خود را تضمین میکنم .</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About