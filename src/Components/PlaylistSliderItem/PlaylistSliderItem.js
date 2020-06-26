import React from 'react';
import ImageItem from '../../assets/images/1165691922_2.webp';
import './PlaylistSliderItem.scss';

const PlaylistSliderItem = () => {
    return(
        <div className="c-contentslider__griditem">
            <a href='https://www.viu.com' className="thumbnailLink">
                <img src={ImageItem} alt='viu' />
                <div className="c-griditem-overlay">
                    <div className="c-overlay__playbtn"><i className="icon viu-play-1"></i></div>
                </div>
            </a>
        </div>
    );
}

export default PlaylistSliderItem;