import React, { useEffect, useState } from 'react';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';
import Loader from '../../Components/Loader/Loader';
// import data from '../../assets/scss/DB.json';

const ErrorPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [apiResponse, setApiResponse] = useState({});

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
