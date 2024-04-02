import axios from 'axios';

const API_KEY = 'f32ebe6218b250451702aad72b3117d4'; 
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

interface WeatherData {
  temperature: number;
  humidity: number;
  windSpeed: number;
  
}

export async function fetchWeatherData(latitude: number, longitude: number): Promise<WeatherData> {
  const url = `${API_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    const weatherData: WeatherData = {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed
   
    };
    
    return weatherData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
}
