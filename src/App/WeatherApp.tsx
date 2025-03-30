import CitySelector from "./citySelector";
import DaySelector from "./daySelector";
import ForecastInfo from "./forecastInfo";
import LanguageSelector from "./languageSelector";

const WeatherApp = () => {
  return (<>
    <CitySelector />
    <LanguageSelector />
    <DaySelector />
    <ForecastInfo />


  </>)
};

export default WeatherApp;
