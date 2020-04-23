import React from 'react'
import './components.css'


export default function Banner() {
    return (
        <div>
            <div className="container-fluid" id="banner">
                <div className="row banner">
                    <div className="col-md-3 sm-3"></div>
                    <div className="col-md-6 sm-6">
                        <div className="content text-center">
                            <h1>Responsive Website Design</h1>
                        </div>
                        <div className="icon text-center">
                            <a href=""><i className="fa fa-arrow-down bounce"></i></a>
                        </div>
                    </div>
                    <div className="col-md-3 sm-3"></div>
                </div>
            </div>
        </div>
    )
}
