import BlogItem from "../blogItem/blogItem"

const BlogContainer = () => {
    return(
        <div className="w-full h-screen bg-Bg1">
            <div className="text-center pt-20 h-2/6">
                <h1 className="inline-block pb-5 text-Brand1 text-center text-4xl border-b border-Brand1">وبلاگ</h1>
                <p className="text-white pt-5">برخی از تجربیات من در این سال های کاری</p>
            </div>
            <div className="h-3/6">
                <div className="w-2/3 h-full border-t border-b mx-auto">
                    <BlogItem></BlogItem>
                </div>
            </div>
            <div className="h-1/6 py-5">
                <button className="block py-3 px-6 bg-Brand1 rounded-full mx-auto border-2 border-Brand1 hover:text-white hover:bg-Bg1">مشاهده همه</button>
            </div>
        </div>
    )
}
export default BlogContainer