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
        items: 3
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
const TeamMember = ({image, name, role}) => (
    <div className="single_team_item mx-auto">
        <div className="single_team mx-3">
            <div className="team_image relative">
                <img src={image} alt={name} className="w-full"/>
            </div>
            <div className="team_content py-5 px-8 relative">
                <h4 className="team_name text-xl md:text-2xl">
                </h4>
                <p className="mt-2 transition-all duration-300 group-hover:text-white">
                    {role}
                </p>
            </div>
        </div>
    </div>
);

function Team() {


    const teamMembers = [
        {image: "src/assets/images/team-1.jpg", name: "Chris Dave", role: "Founder and CEO"},
        {image: "src/assets/images/team-2.jpg", name: "Michael Jordan", role: "Business Development"},
        {image: "src/assets/images/team-3.jpg", name: "Sarah Doe", role: "UI Designer"},
        {image: "src/assets/images/team-5.jpg", name: "Rob Hope", role: "Software Developer"},
    ];


    return (
        <section id="team" className="team_area bg-gray pt-120 pb-120">
            <div className="container">
                <div className="team-wrapper relative">
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        infinite={true}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        {teamMembers.map((member, index) => (
                            <TeamMember key={index} {...member} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Team