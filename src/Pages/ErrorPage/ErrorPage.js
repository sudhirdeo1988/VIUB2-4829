import React from 'react';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';

const ErrorPage = () =>{
    return (
        <>
            <Header/>
            <ErrorContainer/>
            <SliderHolder />
        </>
    );
}

export default ErrorPage;