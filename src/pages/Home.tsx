import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Forecast from "../components/Forecast/Forecast";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Spinner from "../components/ui/Spinner/Spinner";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";
import Error from "../components/Error";
import { AppStore } from "../store/store";

const Home = () => {
  const { loading, isError } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
    isError: state.weather.isError,
  }));

 const [error, setError] = useState<boolean>()
 useEffect(() => {
  setError(isError)
 }, [isError])

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      {error ? (
        <Error />
      ) : (
        <>
          <CurrentWeather />
          <Forecast />
        </>
      )}
    </>
  );
};

export default Home;
