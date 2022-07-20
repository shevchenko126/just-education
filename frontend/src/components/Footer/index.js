import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5 col-md-8 col-sm-10 mt-3 footers-one">
                        <div className="footer__logo">
                            <img src="images/logo_footer.png" alt="logo"/>
                        </div>
                        <div className="footer__address">
                            <p>329 Queensberry Street, North Melbourne VIC 3051,<br/> Australia.</p>
                            <p>123 456 7890 </p>
                            <p>support@skola.com</p>
                        </div>
                        <div className="social-icons">
                            <span className="facebook"><a href="#"><img  src="images/facebook.png"/></a></span>
                            <span className="twitter"><a href="#"><img src="images/twitter.png"/></a></span>
                            <span className="circle instagram"><a href="#"><img  src="images/instagram.png"/></a></span>
                            <span className="linkedin"><a href="#"><img  src="images/linkedin.png"/></a></span>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-3 footers-two">
                        <h5 className="title__name">Our Company </h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Our Company</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Student Perks</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mt-3 footers-three">
                        <h5 className="title__name">Topics</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Ruby</a></li>
                            <li><a href="#">PHP</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">Development Tools</a></li>
                            <li><a href="#">Business</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-4 col-sm-6 mt-3 footers-four">
                        <h5 className="title__name">Tracks</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Rails Development</a></li>
                            <li><a href="#">PHP Development</a></li>
                            <li><a href="#">Android Development</a></li>
                            <li><a href="#">Starting A Business</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-4 col-sm-6 mt-3 footers-five">
                        <h5 className="title__name">Support</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Forums</a></li>
                            <li><a href="#">Language Packs</a></li>
                            <li><a href="#">Release Status</a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="container bottom-area">
                <div className="row mt-5 pt-5 border__top">
                    <div className="col-xl-4 col-md-12 col-lg-8 copyright">
                        <p>
                            Copyright © 2020 CreativeLayers. All Right Reserved.
                        </p>
                    </div>
                    <div className="col-xl-5 col-md-12 col-lg-8">
                            <div className="links__bottom">
                                <a href="#">Home</a>
                                <a href="#">Site Map</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Web Use Policy</a>
                                <a href="#">Cookie Policy</a>
                            </div>
                    </div>
                    <div className="col-xl-1 col-md-12 col-lg-12">
                        <div className="lang__block">
                            <a href="#" id="lang">
                                English
                                <img src="images/Vector_arrow.png"></img>
                            </a>
                        </div>
                    </div>
                    <div id="back-top">
                        <a title="Go to Top" href="#"><img src="images/Vector_arrow.png" alt=""/></a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;