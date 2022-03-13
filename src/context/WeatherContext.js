import React from "react";

import { countryCode } from "../Helpers/CountryFlags";
import { getWeatherData } from "../API/Api";
export const WeatherContext = React.createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = React.useState([]);
  const [days, setDays] = React.useState([]);
  const [flag, setFlag] = React.useState("");
  const [inputError, setInputError] = React.useState(false);
  const [city, setCity] = React.useState("London");
  const [isLoading, setIsLoading] = React.useState(true);
  const [today, setToday] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const [responseError, setResponseError] = React.useState("");
  const getWeather = async (city) => {
    try {
      const response = await getWeatherData(city);
      setWeatherData(response.data.city);
      setDays(response.data.list.filter((item, index) => index % 8 === 0));
      getCountryFlag(response.data.city.country);
      setToday(response.data.list[0]);
      setIsLoading(false);
      setSelectValue(response.data.list[0].dt_txt);
    } catch (error) {
      setResponseError(error.response.data.message);
    }
  };

  React.useEffect(() => {
    getWeather(city);
  }, [city]);

  const getCountryFlag = (country) => {
    const flagCode = countryCode.filter((item) => item.code === country);
    setFlag(flagCode[0].flag);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    if (city === "") {
      setInputError(true);
    } else {
      setCity(city);
      e.target.elements.city.value = "";
      setInputError(false);
      setResponseError("");
      setSelectValue(days[0].dt_txt);
    }
  };

  const values = {
    weatherData,
    days,
    flag,
    inputError,
    city,
    isLoading,
    handleSubmit,
    getCountryFlag,
    setDays,
    today,
    setToday,
    selectValue,
    setSelectValue,
    responseError,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};
