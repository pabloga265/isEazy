import "./daySelector.css";
import Previous from "./components/Previous";
import Next from "./components/Next";
import DaySlider from "./components/DaySlider";
import { useWeatherContext } from "../../context/WeatherContext";


const DaySelector = () => {
	const { day, changeDay, forecast } = useWeatherContext();
	if (!forecast.DailyForecasts) return null;
	return (
		<div className="daySelector">
			<Previous disabled={!!(day < 1)} action={() => changeDay(day - 1)}/>
				<DaySlider day={forecast?.DailyForecasts[day].Date}/>
			<Next disabled={!!(day > 3)} action={() => changeDay(day + 1)}/>
		</div>
	);
};

export default DaySelector;
