function Landing(){
    return (
        <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">


            <div className="container">
                <div className="row">
                    <div className="w-full lg:w-1/2">
                        <div className="header_hero_content pt-150 lg:pt-0">
                            <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                                Take The Plunge, LLC
                            </h2>
                            <p className="mt-8 lg:mr-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_shape hidden lg:block"></div>

            <div className="header_image flex items-center">
                <div className="image 2xl:pl-25">
                    <img src="src/assets/images/header-image.png" alt="Header Image"/>
                </div>
            </div>
        </div>
    )
}

export default Landing