function Landing() {
    return (
        <div id="home" className="header_hero bg-gray relative z-10 overflow-hidden lg:flex items-center">


            <div className="container z-20">
                <div className="row">
                    <div className="w-full lg:w-1/2">
                        <div className="header_hero_content pt-150 lg:pt-0">
                            <h2 className="hero_title text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold">
                                Take the Plunge Plumbing
                            </h2>
                            <p className="mt-8 lg:mr-8 mb-4">
                                Welcome to Take the Plunge Plumbing, owned and operated by Christine Welborn. We are a
                                full-service plumbing company dedicated to providing our customers with outstanding
                                customer service and the highest quality workmanship.
                            </p>
                            <p className="mt-4">
                                We understand plumbing issues can be stressful and disruptive to your daily lives and
                                schedules. That's why we offer a wide range of plumbing services; we are here to help
                                keep your residence or business running smoothly. From routine maintenance and repairs
                                to new installations, we have the expertise and experience to handle any plumbing issue.
                            </p>
                            <p className="mt-4">
                                Our team of licensed and insured plumbing contractors are highly trained and skilled in
                                all aspects of plumbing. Our team uses the latest technology to diagnose and repair
                                plumbing problems quickly and efficiently. We also offer emergency plumbing services for
                                those unexpected situations that require immediate attention.
                            </p>
                            <p className="mt-4 z-20">

                                Take the Plunge Plumbing takes pride in providing our customers with reliable and
                                affordable plumbing services. Before we get started, we will give you an estimated cost
                                for replacement or repairs. We also stand behind our work with a satisfaction guarantee,
                                ensuring that you are completely satisfied with the work we do.
                            </p>
                            <p className="mt-4 z-20">
                                Whether you need a leaky faucet fixed, a new tankless/water heater installed, or a
                                complete plumbing system overhaul, we're here to help. Contact us today—Take the Plunge!
                            </p>
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