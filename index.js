
export async function getCurrentTemperature(location){
    const apiKey = '4f0eeb58cc7f43cb9f1120925242206';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData.current.temp_c+" C";
    }catch(error){
        console.error('Error:',error);
    }
    
}
 export async function getLocationInfo(location){
    const apiKey = '4f0eeb58cc7f43cb9f1120925242206';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData.location;
    }catch(error){
        console.error('Error:',error);
    }
    
}

export async function getHumidity(location){
    const apiKey = '4f0eeb58cc7f43cb9f1120925242206';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData.current.humidity;
    }catch(error){
        console.error('Error:',error);
    }
    
}
export async function getWeatherCondition(location){
    const apiKey = '4f0eeb58cc7f43cb9f1120925242206';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData.current.condition;
    }catch(error){
        console.error('Error:',error);
    }
    
}
export async function getWindSpeed(location){
    const apiKey = '4f0eeb58cc7f43cb9f1120925242206';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
    try{
        const weatherFetch = await fetch(url);
        const weatherData = await weatherFetch.json();
        return weatherData.current.wind_kph+" kmph";
    }catch(error){
        console.error('Error:',error);
    }
    
}
//getCurrentTemperature('Dehradun').then(body=>console.log(body));
