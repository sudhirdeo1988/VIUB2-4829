import React from 'react';
import { useQueryParam } from 'use-query-param';
import './PlaylistSliderItem.scss';
import { getCountryHostUrl } from '../../utils';

const PlaylistSliderItem = (props) => {
  const { queryParams } = useQueryParam();
  const { videoItem } = props;
  const allQueryParams = window.location.search;
  // const [, , country, language] = window.location.pathname.split('/');
  const host = getCountryHostUrl(queryParams.country, queryParams.language);

  return (
    <div className="c-contentslider__griditem">
      <a
        href={`${host}/${videoItem.redirectUrl}${allQueryParams}${
          allQueryParams ? '&' : '?'
        }redirected_from=dirtErrorPage`}
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
