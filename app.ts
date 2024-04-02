// app.ts
function searchWeather() {
    const cityInput = document.getElementById('cityInput') as HTMLInputElement;
    const cityName = cityInput.value.trim();
    
    // Call weather service function to fetch weather data
    getWeather(cityName);
}

function getWeather(cityName: string) {
    // Make API request to fetch weather data
    // Implementation goes here
}
