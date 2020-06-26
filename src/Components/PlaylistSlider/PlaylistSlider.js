import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './PlaylistSlider.scss';
import "../../assets/scss/slick.css";
import Slider from "react-slick";
import PlaylistSliderItem from '../PlaylistSliderItem/PlaylistSliderItem';

const PlaylistSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        lazyLoad: false,
        variableWidth: true,
        focusOnSelect: false,
        accessibility: false,
        draggable: false,
        slide: 'div',
        slidesToScroll: 4,
        slidesToShow: 4,
        responsive: [
            // 320 to 768 resolution
            {
            breakpoint: 320,
            settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                draggable: true
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToScroll: 4,
                slidesToShow: 4,
                draggable: true
            }
            },
            // 769 to 1024 resolution
            {
            breakpoint: 769,
            settings: {
                slidesToScroll: 5,
                slidesToShow: 5,
                draggable: true
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToScroll: 5,
                slidesToShow: 5,
                draggable: true
            }
            },
            // 1025 to 1979 resolution
            {
            breakpoint: 1025,
            settings: {
                slidesToScroll: 7,
                slidesToShow: 7,
                draggable: true
            }
            },
            {
            breakpoint: 1919,
            settings: {
                slidesToScroll: 7,
                slidesToShow: 7,
                draggable: true
            }
            },
            // 1920 to 10000 resolution
            {
            breakpoint: 1920,
            settings: {
                slidesToScroll: 9,
                slidesToShow: 9
            }
            },
            {
            breakpoint: 10000,
            settings: {
                slidesToScroll: 9,
                slidesToShow: 9
            }
            }
        ]
    };
    return (
        <>
            <div className="c-sliderHeader">
                <div className="c-header__section">
                    <h2 className="c-header__title">Slider Title</h2>
                </div>
            </div>
            <Router>
                <div className="c-contentslider">
                    <Slider {...settings}>
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                        <PlaylistSliderItem />
                    </Slider>
                </div>
            </Router>
        </>
    )
}

export default PlaylistSlider;