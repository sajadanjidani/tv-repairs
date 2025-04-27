const BlogItem = ({title , subTitle}) => {

    const clickHandler = (e) => {
        let title = e.target
        let subTitle = e.target.nextElementSibling
        if(subTitle.id == 'active'){
            subTitle.style.display = 'none'
            title.style.color = '#98FAEC'
            subTitle.id = ''
        }else{
            subTitle.style.display = 'block'
            title.style.color = 'skyBlue'
            subTitle.id = 'active'
        }
    }

    return(
        <div onClick={clickHandler} className="w-full border rounded-md bg-Bg2 cursor-pointer">
            <h1 id="title" className="py-4 px-3 text-Brand2">{title}</h1>
            <p id="subTitle" className="hidden text-white pb-4 px-4">{subTitle}</p>
        </div>
    )
}
export default BlogItem