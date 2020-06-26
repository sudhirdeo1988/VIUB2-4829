import React from 'react';
import './PlaylistSliderItem.scss';

const PlaylistSliderItem = (props) => {
  const host = `https://viu.com/ott/in/en/hindi`;

  const { videoItem } = props;
  return (
    <div className='c-contentslider__griditem'>
      <a href={`${host}/${videoItem.redirectUrl}`} className='thumbnailLink'>
        <img src={videoItem.imageUrl} alt={videoItem.imageAlt} />
        <div className='c-griditem-overlay'>
          <div className='c-overlay__playbtn'>
            <i className='icon viu-play-1'></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlaylistSliderItem;
