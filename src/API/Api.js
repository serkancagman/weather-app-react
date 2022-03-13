import axios from "axios";
export const getWeatherData = async (city) => {
  const response = await axios.get(
    `${process.env.REACT_APP_ENDPOINT}${city}&units=metric&appid=${process.env.REACT_APP_ENDPOINT_KEY}`
  );
  return response;
};
