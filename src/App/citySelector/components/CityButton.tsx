import { useWeatherContext } from "../../../context/WeatherContext";
import "../citySelector.css";

const CityButton = ({ buttonCity, action, number }: { buttonCity: string, action: (city: string) => void, number: number }) => {
  const { city } = useWeatherContext();

  const cityClass =
    city === buttonCity
      ? `citySelector_button_${number} selected`
      : `citySelector_button_${number}`;

  return (
    <button value={buttonCity} className={cityClass} onClick={() => action(buttonCity)}>
      {buttonCity}
    </button>
  );
};

export default CityButton;
