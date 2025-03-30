import { WEATHER_API_KEY, API_HOST, cityMap } from "../../app.config";

function getForecast(city: string) {
  const locationKey = cityMap[city as keyof typeof cityMap].key;
  const url = `${API_HOST}/forecasts/v1/daily/5day/${locationKey}?apikey=${WEATHER_API_KEY}&language=en-us&details=true`;
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
      return {};
    });
}

export { getForecast };
