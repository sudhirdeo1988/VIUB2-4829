import React from 'react';
import { useQueryParam } from 'use-query-param';
import './ErrorContainer.scss';
import BlockImage from '../../assets/images/emoji-ad-block.png';

const ErrorContainer = (props) => {
  const { queryParams } = useQueryParam();
  const { errorData } = props;
  return (
    <div className="c-errorContainer">
      <div className="errorBoundry">
        <div className="error_img">
          <img src={BlockImage} alt="pageBlock" />
        </div>
        <div className="error_msg">
          {queryParams && queryParams.lang === 'ar'
            ? `${errorData.description.ar}`
            : `${errorData.description.en}`}
        </div>
      </div>
    </div>
  );
};

export default ErrorContainer;
