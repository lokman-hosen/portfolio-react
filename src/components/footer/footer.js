import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="section bg-secondary position-relative pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget  mb-5 mb-lg-0">
                                <h4 className="font-weight-bold text-white mb-3">About dizer.</h4>
                                <p className="text-white">Lorem ipsum dolor amet consectetur adipielit sed eiusm tempor incididunt ut labore
                                    dolore magna aliqua enim ad minim veniam.</p>

                                <ul className="list-inline socials-links">
                                    <li className="list-inline-item mb-2">
                                        <a href="#" className="active"><i className="ti-facebook"></i></a>
                                    </li>
                                    <li className="list-inline-item mb-2">
                                        <a href="#"><i className="ti-twitter-alt"></i></a>
                                    </li>
                                    <li className="list-inline-item mb-2">
                                        <a href="#"><i className="ti-vimeo-alt"></i></a>
                                    </li>
                                    <li className="list-inline-item mb-2">
                                        <a href="#"><i className="ti-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0 col-md-6">
                            <div className="footer-widget">
                                <h4 className="text-white mb-3">Navigation</h4>

                                <ul className="list-unstyled lh-38">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">services</a></li>
                                    <li><a href="#">projects</a></li>
                                    <li><a href="#">company news</a></li>
                                    <li><a href="#">conatct us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-widget  mb-5 mb-lg-0">
                                <h4 className="text-white mb-3">Services</h4>
                                <ul className="list-unstyled lh-38">
                                    <li><a href="#">Brand Design</a></li>
                                    <li><a href="#">seo &amp; marketing</a></li>
                                    <li><a href="#">creative design</a></li>
                                    <li><a href="#">photography</a></li>
                                    <li><a href="#">print design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h4 className="text-white mb-3">Contact Info</h4>
                                <ul className="list-unstyled lh-38">
                                    <li>9567 Turner Trace Apt. 466 North Willie, BC C3G8A4</li>
                                    <li><a href="tel:+21 123 456 5523">+21 123 456 5523</a></li>
                                    <li><a href="mailto:hello@dizer.com">hello@dizer.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm ">
                    <div className="container border-top py-4 mt-5">
                        <div className="row align-items-center justify-content-md-between">
                            <div className="col-12 col-lg-4">
                                <div className="text-center text-lg-left "><span>dizer. © 2018 All Right Reserved</span>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center col-12">
                                <h3 className="text-white text-lowercase">dizer<span className="dot"></span></h3>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="text-center text-lg-right">
                                    <a href="#">Terms of Service <span className="mx-2">|</span></a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer
