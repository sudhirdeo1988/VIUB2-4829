import React from 'react';
import { useQueryParam } from 'use-query-param';
import './ErrorContainer.scss';
import BlockImage from '../../assets/images/emoji-ad-block.png';

const ErrorContainer = (props) => {
  const { errorData } = props;
  const { queryParams } = useQueryParam();
  // const [, , , language] = window.location.pathname.split('/') || 'en';
  return (
    <div className="c-errorContainer">
      <div className="errorBoundry">
        <div className="error_img">
          <img src={BlockImage} alt="pageBlock" />
        </div>
        <div className="error_msg">
          {queryParams && queryParams.language === 'ar'
            ? `${errorData.description.ar}`
            : `${errorData.description.en}`}
        </div>
      </div>
    </div>
  );
};

export default ErrorContainer;
