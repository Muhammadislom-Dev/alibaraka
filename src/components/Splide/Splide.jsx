import './Splide.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from 'react';

//Images
import slack from '../../assets/img/slack.png'
import google from '../../assets/img/google.png'
import wordpress from '../../assets/img/wordpress.png'
import microsoft from '../../assets/img/micro.png'

const Splides = () =>{

    document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '#image-carousel' ).mount();
      } );

    return(
        <div className="splide">
            <div className="container">


            <Splide className='splide-list'  options={{rewind: true, gap: '1rem',}} aria-label="React Splide Example">
                <SplideSlide className='splide-item'>
                    <a href="#" className="splide-link">
                        <img src={microsoft} className="splide-img" alt="Image 1"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide-item'>
                    <a href="#" className="splide-link">
                        <img src={wordpress} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide-item'>
                    <a href="#" className="splide-link">
                        <img src={slack} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide-item'>
                    <a href="#" className="splide-link">
                        <img src={google} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    )
}

export default Splides