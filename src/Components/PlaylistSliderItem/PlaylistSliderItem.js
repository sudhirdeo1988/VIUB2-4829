import React from 'react';
import { useQueryParam } from 'use-query-param';
import './PlaylistSliderItem.scss';
import { getCountryHostUrl } from '../../utils';

const PlaylistSliderItem = (props) => {
  const { queryParams } = useQueryParam();

  const allQueryParams = window.location.search;
  const host = getCountryHostUrl(queryParams.country, queryParams.language);

  const { videoItem } = props;

  return (
    <div className="c-contentslider__griditem">
      <a
        href={`${host}/${videoItem.redirectUrl}${allQueryParams}`}
        className="thumbnailLink"
      >
        <img src={videoItem.imageUrl} alt={videoItem.imageAlt} />
        <div className="c-griditem-overlay">
          <div className="c-overlay__playbtn">
            <i className="icon viu-play-1"></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlaylistSliderItem;
