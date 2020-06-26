import React from 'react';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';
import PlaylistData from '../../DB/viu.json';

const ErrorPage = () =>{
    return (
        <>
            <Header header={PlaylistData.header}/>
            <ErrorContainer errorData={PlaylistData.spotlight.error}/>
            <SliderHolder playlist={PlaylistData.videoList} />
        </>
    );
}

export default ErrorPage;