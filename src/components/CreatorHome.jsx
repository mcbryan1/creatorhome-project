import React, { Component } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import VideoGallery from './VideoGallery'
import Chart from './Chart'
import Footer from './Footer'
import Images from './Images'
import { animateScroll as scroll } from 'react-scroll'



export default class creatorHome extends Component {
    
    render() {
        return (
            <div>
                <div className="creator-home">
                    <NavBar/>
                    <Banner/>
                    <Images/>
                    <VideoGallery/>
                    <Chart/>
                    <Footer/>
                </div>
                <div className="scroll_up">
                    <i className="fa fa-arrow-up" onClick={()=> scroll.scrollToTop()} ></i>
                </div>
            </div>
        )
    }
}
