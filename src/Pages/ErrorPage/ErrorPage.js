import React, { useEffect, useState } from 'react';
import { useQueryParam } from 'use-query-param';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';
import Loader from '../../Components/Loader/Loader';

const ErrorPage = () => {
  const { queryParams } = useQueryParam();
  const [isLoading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState({});

  // const [, , , language] = window.location.pathname.split('/') || 'en';

  const getData = async () => {
    const res = await fetch(
      'https://s3-ap-southeast-1.amazonaws.com/viuprod.vuclip.com/page/DB.json'
    );
    const data = await res.json();
    setApiResponse(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (queryParams && queryParams.language === 'ar') {
    const rtlwrap = document.querySelector('.wrapperForRtl');
    rtlwrap.classList.add('RTL');
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header header={apiResponse.header} />
      <ErrorContainer errorData={apiResponse.error} />
      <SliderHolder
        playlist={
          queryParams && queryParams.language === 'ar'
            ? apiResponse.videoList_ar
            : apiResponse.videoList
        }
      />
    </>
  );
};

export default ErrorPage;
