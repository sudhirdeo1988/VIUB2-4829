import React, { useEffect, useState } from 'react';
import { useQueryParam } from 'use-query-param';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';
import Loader from '../../Components/Loader/Loader';
// import data from '../../assets/scss/DB.json';

const ErrorPage = () => {
  const { queryParams } = useQueryParam();
  const [isLoading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState({});
  const isRtl = queryParams && queryParams.lang;

  if (isRtl === 'ar') {
    const rtlwrap = document.querySelector('.wrapperForRtl');
    rtlwrap.classList.add('RTL');
  }

  const getData = async () => {
    const res = await fetch('https://viu-server-json.herokuapp.com/response');
    const data = await res.json();
    setApiResponse(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header header={apiResponse.header} />
      <ErrorContainer errorData={apiResponse.error} />
      <SliderHolder playlist={apiResponse.videoList} />
    </>
  );
};

export default ErrorPage;
