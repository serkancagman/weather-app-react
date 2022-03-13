import React from "react";
import Lottie from "lottie-react";
import Snow from "../../assets/snow.json";
import Rain from "../../assets/rain.json";
import Sunny from "../../assets/sunny.json";
import Cloudy from "../../assets/cloudy.json";

const Animations = ({ name }) => {
  let animation;
  switch (name) {
    case "Snow":
      animation = Snow;
      break;
    case "Rain":
      animation = Rain;
      break;
    case "Clear":
      animation = Cloudy;
      break;
    case "Clouds":
      animation = Cloudy;
      break;
  }

  return (
    <div className="w-75 d-flex justify-content-center align-items-center">
      <Lottie loop={true} animationData={animation} />
    </div>
  );
};

export default Animations;
