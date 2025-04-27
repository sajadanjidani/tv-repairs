import BlogItem from './../blogItem/blogItem';

const BlogContainer = () => {

    const blogInfo = [
        {id: 1, title: 'تعمیرات تلویزیون معمولاً چقدر زمان می‌بره؟', subTitle: 'با توجه به ایراد دستگاه بین یک تا سه روز زمان میبرد اما اکثرا طی چند ساعت تعمیر میشود.'},
        {id: 2, title: 'آیا تعمیراتی که انجام می‌دین ضمانت هم دارن؟', subTitle: 'تمامی خدمات شامل 3 تا 6 ماه گارانتی می باشد.'},
        {id: 3, title: 'از کجا بدونم که خدمات شما برای تعمیر تلویزیون واقعاً باکیفیت و قابل اعتماده؟', subTitle: 'متاسفانه پنل دستگاه شما اسیب دیده است و باید تعویض شود, باتوجه به هزینه بالای پنل بهتر است به فکر خرید تلویزیون جدید باشید.'},
        {id: 4, title: 'می‌تونم درخواست تعمیر تلویزیون در محل داشته باشم یا حتماً باید تلویزیون رو بیارم کارگاه؟', subTitle: 'بعد از سال ها تجربه در این زمینه مفتخرم که بهترین خدمات را ارایه کنم تا رضایت مشتری را جلب کنم, همچنین میتوانید نظرات دیگر مشتریان را بخوانید.'},
        {id: 5, title: 'آیا می‌توان تلویزیون را در محل تعمیر کرد یا باید به کارگاه منتقل شود؟', subTitle: 'ابتدا باید ایراد بررسی شود در اکثر مواقع خدمات در محل ارایه می شود اما در بعضی مواقع نیاز به تجهیزات خاص است.'},
    ]

    return(
        <div className="w-full h-auto bg-Bg1 pb-20">
            <div className="text-center pt-20 h-2/6">
                <h1 className="inline-block pb-5 text-Brand1 text-center text-3xl border-b border-Brand1">سوالات متداول</h1>
            </div>
            <div className="h-auto mt-5">
                <div className="grid gap-5 w-10/12 lg:w-2/3 h-auto mx-auto">
                    <BlogItem {...blogInfo[0]}></BlogItem>
                    <BlogItem {...blogInfo[1]}></BlogItem>
                    <BlogItem {...blogInfo[4]}></BlogItem>
                    <BlogItem {...blogInfo[2]}></BlogItem>
                    <BlogItem {...blogInfo[3]}></BlogItem>
                </div>
            </div>
        </div>
    )
}
export default BlogContainer