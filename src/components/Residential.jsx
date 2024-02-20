import Carousel from "react-multi-carousel";

function Residential() {
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
            title: "Traditional Water Heaters",
            description: "Traditional water heaters are the most common type of water heater. They work by storing hot water in a tank and then distributing it throughout the house as needed. These tanks can hold anywhere from 20 to 80 gallons of water, depending on the size of the household.\n" +
                "One of the benefits of traditional water heaters is that they are relatively inexpensive to install. They are also reliable and can last up to 10 to 15 years with proper maintenance. However, they do have some drawbacks.",
            image: "./src/assets/icons/flame.svg"
        },
        {
            title: "Tankless Water Heaters",
            description: "Tankless water heaters are becoming increasingly popular in households due to their energy efficiency and space-saving design. Rather than storing hot water in a tank, tankless water heaters heat the water on-demand as it is needed. This means they only use energy when hot water is being used, making them more energy-efficient.\n" +
                "One of the benefits of tankless water heaters is that they take up less space than traditional water heaters. They are also more energy-efficient, which means lower energy bills in the long run. However, they do have some drawbacks. They can be more expensive to install initially and may not be able to keep up with the high demand for hot water in larger households.",
            image: "./src/assets/icons/temp.svg"
        },
        {
            title: "Faucet Repair",
            description: "If your faucet is leaking, making strange noises, or not functioning correctly, our team can diagnose the problem and provide the necessary repairs. We use only high-quality parts and materials to ensure that your faucet is functioning correctly and will last for years to come.",
            image: "./src/assets/icons/sink.svg"
        },
        {
            title: "Sewer Lines",
            description: "We know how important it is to have a functional sewer line, which is why we offer a comprehensive range of sewer line services to our customers. Whether you need a simple repair or a complete replacement, our team has the expertise and tools to get the job done right the first time.\n" +
                "Some of the common signs indicating that you may have a sewer line problem include slow-draining sinks and toilets, foul odors coming from your drains, gurgling sounds in your pipes, and sewage backups. If you notice any of these signs, it’s important to act quickly to prevent further damage to your plumbing system.",
            image: "./src/assets/icons/water.svg"
        },
        {
            title: "Drain Lines",
            description: "Drain lines are responsible for carrying wastewater from your home to the sewer system. If your drain lines are clogged or damaged, it can lead to severe problems such as backups, leaks, and water damage. That's why it's essential to keep your drain lines in good condition.\n" +
                "Our team of licensed and experienced plumbers specializes in drain line services, including repair, replacement, and maintenance. We use the latest technology and equipment to provide efficient and effective solutions to all your drain line problems.\n" +
                "We offer a wide range of drain line services, including clean, inspection, repair, and full replacement.",
            image: "./src/assets/icons/sewer.svg"
        },
        {
            title: "Clogged Drains",
            description: "Clogged drains are a common problem that can cause a lot of inconvenience and frustration. They can be caused by a variety of factors, including hair, soap scum, food particles, grease, and even small objects that get stuck in the drain. While some clogs can be easily cleared with a plunger or drain cleaner, others may require professional help.\n" +
                "If you are experiencing slow drains, gurgling sounds, or foul odors coming from your drains, it's time to call US and Take the Plunge Today! Our team will arrive promptly, assess the situation, and provide you with the best solution for your clogged drain problem. We use only the highest quality equipment and products to ensure that your drains are clear and functioning properly.\n" +
                "Don't let clogged drains disrupt your daily routine.",
            image: "./src/assets/icons/plunger.svg"
        },
        {
            title: "Backflow Repair",
            description: "Backflow is a plumbing issue that occurs whenever water flows in the opposite direction from its intended direction. This can happen when there is a drop in water pressure or a backflow preventer valve fails. Backflow can cause contaminated water to enter your home's clean water supply, posing a significant health risk to you and your family. It is therefore essential to address this issue as soon as possible.\n" +
                "Our Backflow Repair Services include testing, repair, installation, and education",
            image: "./src/assets/icons/backflow.svg"
        },
        {
            title: "Garbage Disposal",
            description: "Garbage disposals are an essential part of any modern kitchen, helping to dispose of food waste quickly and easily. However, like any other household appliance, garbage disposals can break down over time or become clogged, leading to unpleasant smells and even more serious plumbing issues.",
            image: "./src/assets/icons/garbage.svg"
        },
        {
            title: "Video Inspection",
            description: "Video inspections are an important part of plumbing maintenance and repair. At Take the Plunge, we are committed to providing our customers with the highest quality plumbing services, including video inspections. Our team of experienced plumbers are trained to use the latest technology to ensure that your plumbing system is in top condition. Whether you need a routine inspection or have a plumbing emergency, we are here to help.\n" +
                "With our state-of-the-art video inspection equipment, we can quickly and accurately diagnose plumbing issues without the need for invasive and time-consuming methods. By using a small camera attached to a flexible cable, we can inspect your pipes and plumbing system from the inside, providing us with a clear view of any damage or blockages.\n" +
                "Some of the Benefits of Video Inspections include accurate diagnosis of issues, time savings, and identifying preventative maintenance.",
            image: "./src/assets/icons/video.svg"
        },

    ]
    return (
        <section id="residential" className="pt-120 relative bg-gray">
            <div className="container">
                <div className="row justify-center">
                    <div className="w-ull lg:w-1/2">
                        <div className="section_title text-center pb-6">
                            <h4 className="main_title">Residential Services</h4>
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
                                <div className="work_icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="92" viewBox="0 0 94 92">
                                        <path className="services_shape" id="Polygon_12" data-name="Polygon 12"
                                              d="M42.212,2.315a11,11,0,0,1,9.576,0l28.138,13.6a11,11,0,0,1,5.938,7.465L92.83,54.018A11,11,0,0,1,90.717,63.3L71.22,87.842A11,11,0,0,1,62.607,92H31.393a11,11,0,0,1-8.613-4.158L3.283,63.3A11,11,0,0,1,1.17,54.018L8.136,23.383a11,11,0,0,1,5.938-7.465Z"/>
                                        <image href={service.image} x="18" y="15" height="60" width="60"/>
                                    </svg>
                                </div>
                                <div className="work_content">
                                    <h4 className="work_title text-xl md:text-2xl"><a
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

export default Residential