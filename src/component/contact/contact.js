const Contact = () => {
    return(
        <div className="w-full h-auto bg-Bg2">
            <div className="flex items-center justify-center w-full h-2/6">
                <h1 className="inline-block py-3 text-2xl text-Brand1 border-b border-Brand1">راه های ارتباطی</h1>
            </div>
            <div className="flex justify-evenly w-full h-4/6 py-10 text-white">
                {/* telegram */}
                <span>تلگرام : <span className="text-Brand1">09381001220</span></span>
                {/* whatsapp */}
                <span>واتساپ : <span className="text-Brand1">09381001220</span></span>
                {/* eita */}
                <span>ایتا : <span className="text-Brand1">09381001220</span></span>
                {/* number */}
                <span>شماره همراه : <span className="text-Brand1">09381001220</span></span>
                {/* phone */}
                <span>شماره تلفن : <span className="text-Brand1">02166459713</span></span>
            </div>
        </div>
    )
}
export default Contact