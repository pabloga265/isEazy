import CityButton from "./components/CityButton";
import "./citySelector.css";
import { useWeatherContext } from "../../context/WeatherContext";

const CitySelector = () => {
  const { availableCities, changeCity } = useWeatherContext();

  return (
    <div className="citySelector">
      {availableCities.map((city, index) => (
        <CityButton
          number={index}
          key={city}
          buttonCity={city}
          action={changeCity}
        />
      ))}
    </div>
  );
};

export default CitySelector;
