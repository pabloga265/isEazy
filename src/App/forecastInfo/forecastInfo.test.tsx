
import { render } from "@testing-library/react";
import { test } from '@jest/globals';
import ForecastInfo from "./index";
import { WeatherProvider } from "../../context/WeatherContext";

jest.mock('../../zDogAssets/Sunny', () => () => (<div>Sun</div>));
jest.mock('../../zDogAssets/Rainy', () => () => (<div>Rain</div>));
jest.mock('../../zDogAssets/Cloudy', () => () => (<div>Cloud</div>));

test("render forecastInfo", async () => {
	render(
		<WeatherProvider>
			<ForecastInfo />
		</WeatherProvider>
	);
});
