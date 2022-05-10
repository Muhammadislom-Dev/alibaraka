import './Splide.css'
import styled from 'styled-components'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import React from 'react';

//Images
import slack from '../../assets/img/slack.png'
import google from '../../assets/img/google.png'
import wordpress from '../../assets/img/wordpress.png'
import microsoft from '../../assets/img/micro.png'

const Splides = () =>{
    return(
        <div className="splides">
            <div className="container">


            <Splide  className='splide-list'   aria-label="React Splide Example">
                <SplideSlide  className='splide__slide'>
                    <a href="#" className="splide-link">
                        <img src={microsoft} className="splide-img" alt="Image 1"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={wordpress} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={slack} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={google} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide__slide'>
                    <a href="#" className="splide-link">
                        <img src={microsoft} className="splide-img" alt="Image 1"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={wordpress} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={slack} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={google} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide__slide'>
                    <a href="#" className="splide-link">
                        <img src={microsoft} className="splide-img" alt="Image 1"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={wordpress} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={slack} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={google} className="splide-img" alt="Image 2"/>
                    </a>
                </SplideSlide>
                <SplideSlide  className='splide__slide'>
                    <a href="#" className="splide-link">
                        <img src={microsoft} className="splide-img" alt="Image 1"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={wordpress} className="splide-img" alt="Image 2"/>
                    </a>
                    <a href="#" className="splide-link">
                        <img src={slack} className="splide-img" alt="Image 2"/>
                    </a>
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