import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery'


export default class VideoGallery extends Component {
    render() {

        const images = [
            {
              original: 'https://www.youtube.com/watch?v=aF3MrOds984',
              thumbnail: 'https://www.youtube.com/watch?v=aF3MrOds984',
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/2/',
              thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
              original: 'http://lorempixel.com/1000/600/nature/3/',
              thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
          ]

        return (
            <div>
                <div className="container-fluid" id="videos">
                    <div className="row">
                        <div className="col-md-12 ">                     
                            <div id="element-1" class="element text-center">Videos</div>
                            <div id="element-2" class="element">Videos</div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-12 video_gallery">
                            <ImageGallery items={images}/>
                        </div>  
                    </div>
                </div>
                
            </div>
        )
    }
}

