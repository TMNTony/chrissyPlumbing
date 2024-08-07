function Footer() {
    return (
        <footer id="footer" className="footer_area bg-black relative z-10">
            <div className="container">
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