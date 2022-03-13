import React from 'react'
import Weather from './Components/Weather/Weather'
import { WeatherProvider } from './context/WeatherContext'

const App = () => {
  return (
    <>
    <WeatherProvider>
    <Weather/>
    </WeatherProvider>
    </>
  )
}

export default App