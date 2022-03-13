import React from "react";
import style from "../Weather/style/weather.module.css";
import { WeatherContext } from "../../context/WeatherContext";
import logoIcon from "../../assets/sun.png";
import Lottie from "lottie-react";
import animationData from "../../assets/loading.json";
import windIcon from "../../assets/wind.png";
import WeatherInput from "../Inputs/WeatherInput";
import Animations from "../WeatherAnimations/Animations";
const WeatherInfo = () => {
  const { weatherData, days, flag, selectValue, today, setToday, isLoading } =
    React.useContext(WeatherContext);

  const date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "";
  }

  React.useEffect(() => {
    const getTodayItem = days.filter((item) => selectValue === item.dt_txt);

    setToday(getTodayItem[0]);
  }, [selectValue]);

  return (
    <section className={style.mainWrapper}>
      <div className="container">
        <div className="row justify-content-center g-3 align-items-center">
          <div className="col-lg-12 col-md-12">
            <div className={style.weatherWrapper}>
              <div className={style.weatherHeader}>
                <img src={logoIcon} alt="logo" className={style.logoIcon} />
                <h2 className={style.weatherTitle}>Weather App</h2>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <div className="d-flex align-items-center justify-content-center">
                  <h3 className={style.dateTitle}>
                    {date.getHours()}:{date.getMinutes()}
                  </h3>
                  <h3 className={style.dateTitle}>{day}</h3>
                </div>
                <div className="d-flex justify-content-center">
                  <h3 className={style.dateTitle}>
                    {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}
                  </h3>
                </div>
              </div>
              <WeatherInput />

              {isLoading ? (
                <div className={style.loadingWrapper}>
                  <Lottie loop={true} animationData={animationData} />
                </div>
              ) : (
                <div className={style.weatherData}>
                  <div className="d-flex justify-content-center align-items-center">
                    <h2 className={style.weatherDataTitle}>
                      {weatherData.name}
                    </h2>
                    <h2 className={style.weatherDataFlag}>{flag}</h2>
                  </div>
                  {today !== "" && (
                    <>
                      <h2 className={style.weatherDataTemp}>
                        {Math.round(today.main.temp)} °C
                      </h2>
                      <p className={style.weatherDataDescription}>
                        <span className={style.dataTitle}>Feels Like</span> :{" "}
                        {Math.round(today.main.feels_like)} °C
                      </p>
                      <div className="d-flex justify-content-center">
                        <p className={style.weatherDataDescription}>
                          <span className={style.dataTitle}> Min :</span>{" "}
                          {Math.round(today.main.temp_min)} °C
                        </p>
                        <p className={style.weatherDataDescription}>
                          <span className={style.dataTitle}> Max :</span>{" "}
                          {Math.round(today.main.temp_max)} °C
                        </p>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <img
                          src={windIcon}
                          alt="wind"
                          className={style.windIcon}
                        />
                        <p className="mx-2 my-0 fs-3">
                          {Math.round(today.wind.speed)} m/s
                        </p>
                      </div>

                      <Animations name={today.weather[0].main} />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherInfo;
