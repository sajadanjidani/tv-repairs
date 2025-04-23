const BlogItem = () => {
    return(
        <div className="flex w-full h-full">
            {/* image box */}
            <div className="grid items-center justify-items-center w-1/3 h-full">
                <div className="w-4/5 h-2/3 rounded-lg overflow-hidden bg-green-300">
                    <img className="w-full h-full object-cover object-center" src="image/blog/blog1.avif" alt="img"/>
                </div>
            </div>
            {/* content */}
            <div className="grid content-center gap-5 w-2/3 h-full">
                <h1 className="text-xl text-Brand1">برای تبدیل شدن به یک توسعه دهنده وب چه چیزی لازم است؟</h1>
                <p className="text-white">توسعه وب، همچنین به عنوان توسعه وب سایت شناخته می شود، شامل انواع وظایف و فرآیندهای مربوط به ایجاد وب سایت برای اینترنت است...</p>
                <span className="text-Brand2 cursor-pointer">ادامه مطلب ...</span>
            </div>
        </div>
    )
}
export default BlogItem