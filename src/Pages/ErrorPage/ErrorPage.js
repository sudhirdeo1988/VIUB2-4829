import React, { useEffect, useState } from 'react';
import './ErrorPage.scss';
import Header from '../../Components/Header/Header';
import ErrorContainer from '../../Components/ErrorContainer/ErrorContainer';
import SliderHolder from '../../Components/SliderHolder/SliderHolder';
import Loader from '../../Components/Loader/Loader';
import PlaylistData from '../../DB/viu.json';

const ErrorPage = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // replace with API call
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Header header={PlaylistData.header} />
      <ErrorContainer errorData={PlaylistData.spotlight.error} />
      <SliderHolder playlist={PlaylistData.videoList} />
    </>
  );
};

export default ErrorPage;
