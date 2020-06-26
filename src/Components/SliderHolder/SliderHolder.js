import React from 'react';
import PlaylistSlider from '../PlaylistSlider/PlaylistSlider';

const SliderHolder = (props) => {
    const { playlist } = props;
    return (
        <div className="c-wrapperContainer">
            <div className="c-comp-holder">
                <PlaylistSlider playlistData={playlist} />
            </div>
        </div>
    );
}

export default SliderHolder;