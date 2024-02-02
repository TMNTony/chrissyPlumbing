function Why() {
    const Reasons = [
        {reason: 'Dependable'},
        {reason: 'Affordable pricing'},
        {reason: 'First class customer service'},
        {reason: 'Safe work practices'},
        {reason: 'Quality workmanship'},
        {reason: 'Bonded, licensed & insured!'},
    ]

    return (
        <section id="why" className="about_area pt-120 relative">
            <div className="about_image flex items-end justify-end">
                <div className="image lg:pr-13">
                    <img src="src/assets/images/about.jpeg" alt="about"/>
                </div>
            </div>
            <div className="container">
                <div className="row justify-end">
                    <div className="w-full lg:w-1/2">
                        <div className="about_content mx-4 pt-11 lg:pt-15 lg:pb-15">
                            <div className="section_title pb-9">
                                <h5 className="sub_title">Why Choose Us?</h5>
                                <h4 className="main_title">We Have Your Back</h4>
                            </div>
                            <p>If you've ever had a plumbing emergency or simply needed a reliable hand with your
                                plumbing needs, look no further than "Take the Plunge." This exceptional plumbing
                                company isn't just about fixing pipes; they're about providing peace of mind. With their
                                skilled and friendly team of experts, you can trust that your plumbing woes will be a
                                thing of the past.</p>
                            <ul className="about_list pt-3">
                                {Reasons.map((reason, index) => (
                                    <li key={index} className="flex mt-5">
                                        <div className="about_check">
                                            <i className="lni lni-checkmark-circle"></i>
                                        </div>
                                        <div className="about_list_content pl-5 pr-2">
                                            <p>{reason.reason}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why