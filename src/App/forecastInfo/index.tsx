import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Sunny, Cloudy, Rainy } from "../../assets/zdog";
import { useWeatherContext } from "../../context/WeatherContext";

const ForecastInfo = () => {
	const { forecast, day } = useWeatherContext();
	const [forecastInfo, setForecastInfo] = useState<any>({
		icon: 0,
		ShortPhrase: "Partly sunny",
		date: format(new Date(), "yyyy-MM-dd"),
		link: ""
	});

	const forecastIcon = (icon: number) => {
		if (icon <= 5) {
			return "sunny";
		} else if (icon <= 11) {
			return "cloudy";
		}

		return "rainy";
	};

	const forecastSwitch = {
		sunny: <Sunny />,
		cloudy: <Cloudy />,
		rainy: <Rainy />,
	};

	useEffect(() => {
		if (Object.keys(forecast).length === 0) return;
		setForecastInfo({
			icon: forecast.DailyForecasts[day].Day.Icon,
			ShortPhrase: forecast.DailyForecasts[day].Day.ShortPhrase,
			date: format(new Date(forecast.DailyForecasts[day].Date), "yyyy-MM-dd"),
			link: forecast.DailyForecasts[day].Link
		})
	}, [day])

	const handleClick = (myLink: string) => () => {
		window.open(myLink, '_blank', 'noopener,noreferrer')
	console.log(myLink)
	}

	return (
		<div className="forecast" onClick={handleClick(forecastInfo.link)}>
			<div className="forecast_shortPhrase">{forecastInfo.ShortPhrase}</div>
			{forecastSwitch[forecastIcon(forecastInfo.icon)]}
		</div>
	);
};

export default ForecastInfo;
