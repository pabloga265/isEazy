import React, { createContext, useState, useContext, useEffect } from "react";
import { getForecast } from "../api";



type WeatherState = {
  city: string;
  day: number;
  forecast: Record<string, any>;
  loading: boolean;
}

type WeatherContextType = [WeatherState, React.Dispatch<React.SetStateAction<WeatherState>>];

const weatherInfoInitialState = {
  city: "madrid",
  day: 0,
  forecast: {},
  loading: false
};
const WeatherContext = createContext<WeatherContextType>([weatherInfoInitialState, () => {}]);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [weatherInfo, setWeatherInfo] = useState(weatherInfoInitialState);

  useEffect(() => {
    getForecast(weatherInfo.city).then((forecast) => {
      setWeatherInfo({ ...weatherInfo, forecast })

    }
    );
  }, [weatherInfo.city]);


  return (
    <WeatherContext.Provider value={[weatherInfo, setWeatherInfo]} >
    { children }
    </WeatherContext.Provider>
	);
};

const useWeatherContext = () => {
  const [weatherInfo, setWeatherInfo] = useContext(WeatherContext);
  const availableCities = ["madrid", "amsterdam", "budapest"];
  const changeCity = (city: string) => {
    if (city !== weatherInfo.city) {
      getForecast(city).then((forecast) => {
        setWeatherInfo({
          ...weatherInfo,
          city,
          forecast,
        });
      });
    }
  };

  const changeDay = (day: number) => {
    if (day !== weatherInfo.day) {
      setWeatherInfo({
        ...weatherInfo,
        day,
      });
    }
  };

  return {
    ...weatherInfo,
    availableCities,
    changeCity,
    changeDay,
  };
};

export { WeatherProvider, WeatherContext, useWeatherContext };
