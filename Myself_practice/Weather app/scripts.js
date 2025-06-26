const apiKey = 'fd6a5534212e6b82aa172a267dc013e';
const city = "Ashgabat";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=eng`;

fetch(url)
.then(response => response.json())
.then(data => {
    document.getElementById("city").textContent = data.name;
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



const now = new Date();
const date = now.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

document.getElementById("date").textContent = date;
})
.catch(error=> {
    console.error('No information has been taken about weather:', error);
});