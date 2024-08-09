import Carousel from "react-multi-carousel";

function Commercial() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };
    const services = [
        {
            title: "Design",
            description: "Our team of experts can design and install a plumbing system that meets your specific needs, whether it's for a new construction project or a renovation.",
            image: "./src/assets/icons/office.svg"
        },
        {
            title: "Repair and Maintenance",
            description: "We offer comprehensive repair and maintenance services to ensure that your plumbing system is operating at peak performance. We can also conduct regular inspections to identify potential issues before they turn into major problems.",
            image: "./src/assets/icons/service.svg"
        },
        {
            title: "Water Heater Services",
            description: "We can install and repair a wide range of water heaters, including tankless, electric, and gas models, to keep your business running smoothly.",
            image: "./src/assets/icons/flame.svg"
        },
        {
            "title": "Drain and Sewer Services",
            "description": "Our team can handle any drain or sewer issue, from clogs and backups to full-scale repairs and replacements.\n\nWe also offer hydro-jetting services to clear out stubborn clogs and keep your drains flowing smoothly."
        },
        {
            title: "Backflow Prevention",
            description: "We can install and maintain backflow prevention devices to protect your business from contaminated water and comply with local regulations.",
            image: "./src/assets/icons/backflow.svg"
        }
    ]
    return (
        <section id="commercial" className="pt-120 relative">
            <div className="container">
                <div className="row justify-center">
                    <div className="w-ull lg:w-1/2">
                        <div className="section_title text-center pb-6">
                            <h4 className="main_title">Commercial Services</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {services.map((service, index) => (
                    <div key={index}>
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_content">
                                    <h4 className="work_title text-xl md:text-2xl text-center"><a
                                        href="#">{service.title}</a>
                                    </h4>
                                    <p className="mt-2">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default Commercial