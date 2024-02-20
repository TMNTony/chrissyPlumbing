import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5
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

const works = [
    {title: "", description: "", image: ""},
]

function Works() {

    const works = [
        {job: "", description: "", image: "src/assets/images/work-1.jpg"},
        {job: "", description: "", image: "src/assets/images/work-1.jpg"},
        {job: "", description: "", image: "src/assets/images/work-1.jpg"},
        {job: "", description: "", image: "src/assets/images/work-1.jpg"},
        {job: "", description: "", image: "src/assets/images/work-1.jpg"},
    ]


    return (
        <section id="work" className="work_area bg-gray pt-120 pb-120">
            <div className="container">
                <div className="row justify-center">
                    <div className="w-ull lg:w-1/2">
                        <div className="section_title text-center pb-6">
                            <h5 className="sub_title">Gallery</h5>
                            <h4 className="main_title">Some of Our Recent Work</h4>
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
                {works.map((work, index) => (
                    <div key={index}>
                        <div className="single_item mx-auto">
                            <div className="single_work mx-3">
                                <div className="work_image">
                                    <img src={work.image} alt={work.job} className="w-full"/>
                                </div>
                                <div className="work_content">
                                    <h4 className="work_title text-xl md:text-2xl"><a
                                        href="#">{work.job}</a>
                                    </h4>
                                    <p className="mt-2">{work.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

export default Works