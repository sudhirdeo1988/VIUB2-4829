import React from 'react';
import './ErrorContainer.scss';
import BlockImage from '../../assets/images/emoji-ad-block.png';

const ErrorContainer = (props) => {
    const {errorData} = props;
    return(
        <div className="c-errorContainer">
            <div className="errorBoundry">
                <div className="error_img">
                    <img src={BlockImage} alt='pageBlock' />
                </div>
                <div className="error_msg">{errorData.description}</div>
            </div>
        </div>
    );
}

export default ErrorContainer;