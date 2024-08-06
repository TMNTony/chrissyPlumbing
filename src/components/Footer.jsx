function Footer() {
    return (
        <footer id="footer" className="footer_area bg-black relative z-10">
            <div className="container">
                <div className="footer_widget pt-18 pb-120">
                    <div className="row justify-center">
                        <div className="w-full md:w-1/2 lg:w-3/12">
                            <div className="footer_about mt-13 mx-3">
                                {/* <div className="footer_logo">
                                    <a href="#home"><img src="src/assets/images/logo-footer.svg" alt=""/></a>
                                </div> */}
                                <div className="footer_content mt-8">
                                    <p className="text-white"></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-5/12">
                            <div className="footer_link_wrapper flex flex-wrap mx-3">
                                <div className="footer_link w-1/2 md:pl-13 mt-13">
                                    <h2 className="footer_title text-xl font-semibold text-white">Quick Links</h2>
                                    <ul className="link pt-4">
                                        <li><a href="#"
                                               className="text-white mt-4 hover:text-theme-color">Company</a></li>
                                        <li><a href="#" className="text-white mt-4 hover:text-theme-color">Privacy
                                            Policy</a></li>
                                        <li><a href="#" className="text-white mt-4 hover:text-theme-color">About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer_link w-1/2 md:pl-13 mt-13">
                                    <h2 className="footer_title text-xl font-semibold text-white">Resources</h2>
                                    <ul className="link pt-4">
                                        <li><a href="#"
                                               className="text-white mt-4 hover:text-theme-color">Support</a></li>
                                        <li><a href="#"
                                               className="text-white mt-4 hover:text-theme-color">Contact</a></li>
                                        <li><a href="#" className="text-white mt-4 hover:text-theme-color">Terms</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="footer_copyright pt-3 pb-6 border-t-2 border-solid border-white border-opacity-10 sm:flex justify-between">
                    <div className="footer_social pt-4 mx-3 text-center">
                        <ul className="social flex justify-center sm:justify-start">
                            <li className="mr-3"><a
                                href="https://www.facebook.com/taketheplungeplumbing?mibextid=LQQJ4d"><i
                                className="lni lni-facebook-filled"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer_copyright_content pt-4 text-center">
                        <p className="text-white">Developed by
                            <a href="https://tonycarlsondeveloper.com" rel="nofollow"
                               className="text-white hover:text-theme-color"> Carlson
                                Consulting
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer