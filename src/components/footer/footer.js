import { useEffect, useState } from "react";

export const Footer = () => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=3e147a48d4edcbc793072c26d2756b50')
			.then(response => response.json())
			.then(({name, main, weather}) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			})
			.catch(console.log);
	}, []);

	return (
		<footer>
			<div>{city}, {temperature} градусов, {weather}</div>
		</footer>
	);
}