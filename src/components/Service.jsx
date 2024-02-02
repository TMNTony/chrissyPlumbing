function Services() {
    const Services = [
        {service: "24/7 Emergency Service", icon: './src/assets/icons/clock.svg'},
        {service: "General Plumbing", icon: './src/assets/icons/plunger.svg'},
        {service: "Drain Cleaning", icon: './src/assets/icons/sink.svg'},
        {service: "Water & Sewer Repair", icon: './src/assets/icons/sewer.svg'},
        {service: "Gas Line Repair", icon: './src/assets/icons/flame.svg'},
        {service: "Back Flow Testing", icon: './src/assets/icons/water.svg'},
        {service: "Tank/Tankless Water Heater Maintenance", icon: './src/assets/icons/temp.svg'},
        {service: "Commercial & Residential Services", icon: './src/assets/icons/office.svg'},
        {service: "and much more", icon: './src/assets/icons/service.svg'},
    ]

    return (
        <section id="services" className="services_area pt-120 pb-120">
            <div className="container">
                <div className="row justify-center">
                    <div className="w-full lg:w-1/2">
                        <div className="section_title text-center pb-6">
                            <h5 className="sub_title">What We Do</h5>
                            <h4 className="main_title">Our Services</h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-center">
                    {Services.map((service, index) => (
                        <div key={index} className="w-full sm:w-10/12 md:w-6/12 lg:w-4/12">
                            <div className="single_services text-center mt-8 mx-3">
                                <div className="services_icon">

                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                        <path className="services_shape" id="Polygon_12" data-name="Polygon 12"
                                              d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"/>
                                        <image href={service.icon} x="18" y="15" height="60" width="60"/>
                                    </svg>

                                </div>
                                <div className="services_content mt-5 xl:mt-10">
                                    <h3 className="services_title text-black font-semibold text-xl md:text-2xl lg:text-xl xl:text-3xl">
                                        {service.service}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services