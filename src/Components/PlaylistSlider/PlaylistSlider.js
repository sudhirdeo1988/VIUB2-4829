import React from 'react';
import './PlaylistSlider.scss';
import '../../assets/scss/slick.css';
import Slider from 'react-slick';
import PlaylistSliderItem from '../PlaylistSliderItem/PlaylistSliderItem';

const PlaylistSlider = (props) => {
  const { playlistData } = props;
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
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
          draggable: true,
        },
      },
      // 769 to 1024 resolution
      {
        breakpoint: 769,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
          draggable: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 5,
          slidesToShow: 5,
          draggable: true,
        },
      },
      // 1025 to 1979 resolution
      {
        breakpoint: 1025,
        settings: {
          slidesToScroll: 7,
          slidesToShow: 7,
          draggable: true,
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToScroll: 7,
          slidesToShow: 7,
          draggable: true,
        },
      },
      // 1920 to 10000 resolution
      {
        breakpoint: 1920,
        settings: {
          slidesToScroll: 9,
          slidesToShow: 9,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToScroll: 9,
          slidesToShow: 9,
        },
      },
    ],
  };
  return (
    <>
      {playlistData.map((playlistItem, index) => {
        return (
          playlistItem.videoThumbnails.length > 0 && (
            <div key={index}>
              <div className='c-sliderHeader'>
                <div className='c-header__section'>
                  <h2 className='c-header__title'>{playlistItem.title}</h2>
                </div>
              </div>
              <div className='c-contentslider'>
                <Slider {...settings}>
                  {playlistItem.videoThumbnails.map((item, index) => (
                    <PlaylistSliderItem videoItem={item} key={index} />
                  ))}
                </Slider>
              </div>
            </div>
          )
        );
      })}
    </>
  );
};

export default PlaylistSlider;
