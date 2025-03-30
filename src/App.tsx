import './App.css'
import { WeatherProvider } from "./context/WeatherContext";
import WeatherApp from './App/WeatherApp';

function App() {
  return (
    <>
      <main>
        <WeatherProvider>
          <WeatherApp />
        </WeatherProvider>
      </main>
    </>
  )
}

export default App
