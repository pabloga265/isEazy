import { render } from '@testing-library/react'
import DaySelector from "./index";
import { WeatherProvider } from "../../context/WeatherContext";

test("render DaySelector", async () => {
	render(
		<WeatherProvider>
			<DaySelector />
		</WeatherProvider>
	)
});
