import React from 'react'
import { Link } from 'react-scroll'


export default function footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-md-7">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="contact text-center">
                                        <p>Location</p>
                                        <i className="fa fa-street-view"></i>
                                        <h6>Accra - Ghana</h6>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="contact text-center">
                                        <p>Email</p>
                                        <i className="fa fa-envelope"></i>
                                        <h6>solomontetteh.st@outlook.com</h6>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="contact text-center">
                                        <p>Phone</p>
                                        <i className="fa fa-phone"></i>
                                        <h6>+233 554-536-187</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="social_icons text-center">
                            <a href="https://web.facebook.com/solomon.kylebryan"> <i className="fa fa-facebook facebook"></i> </a>
                            <a href="https://twitter.com/mcbryan1z"> <i className="fa fa-twitter twitter"></i> </a>
                            <a href="https://github.com/mcbryan1"> <i className="fa fa-github github"></i> </a>
                            <a href="https://www.linkedin.com/in/solomon-tetteh-a7b605190/"> <i className="fa fa-linkedin linkedin"></i> </a>
                            <a href="https://www.instagram.com/else_coding/?hl=en"> <i className="fa fa-instagram instagram"></i> </a>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="quick_links text-center">
                                    <Link className="link" to="images" smooth={true} duration={1000}>Images</Link>
                                    <Link className="link" to="videos" smooth={true} duration={1000}>Videos</Link>
                                    <Link className="link" to="charts" smooth={true} duration={1000}>Charts</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
