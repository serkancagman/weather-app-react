import React from "react";
import style from "./style/inputs.module.css";
import cityIcon from "../../assets/city.png";
import { WeatherContext } from "../../context/WeatherContext";
const WeatherInput = () => {
  const {
    handleSubmit,
    setSelectValue,
    days,
    selectValue,
    inputError,
    responseError,
  } = React.useContext(WeatherContext);
  return (
    <div className={style.inputArea}>
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <img src={cityIcon} alt="city" className={style.cityIcon} />
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="City name"
          />
        </div>
        <button
          type="submit"
          className={`btn text-light w-100 my-3 ${style.submitBtn}`}
        >
          Get Weather
        </button>
        {inputError ? (
          <div className="alert alert-danger">Enter a city name! </div>
        ) : (
          ""
        )}
        {responseError && (
          <div className="alert alert-danger">{responseError}</div>
        )}
      </form>
      <div className="d-flex justify-content-center px-5 align-items-center">
        <span className="me-3">Days</span>
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          className="form-select w-75 text-muted"
          value={selectValue}
        >
          {days.map((day, index) => {
            return (
              <option key={index} value={day.dt_txt}>
                {day.dt_txt.split(" ")[0]}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default WeatherInput;
