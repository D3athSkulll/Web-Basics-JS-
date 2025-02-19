const APIKEY= '4abda7809e4b4316894230443250302';

const input = document.querySelector('.search-box');
const button  = document.querySelector('.button');

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const country = document.querySelector('.country');
const lat = document.querySelector('.lat');
const long = document.querySelector('.long');
const date = document.querySelector('.date');
const temp = document.querySelector('.temp');
const windspeed = document.querySelector('.windspeed');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');


button.addEventListener('click',fetchdata);
input.addEventListener("keypress",function(e){
    if(e.key ==="Enter")
      {
        button.click();
      }
  });

async function fetchdata(){
    try {
        const cityname = input.value;
        console.log(cityname);
        // const url=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=5a3fd1ae90730329c732f7e4e5960c8e`;
        const url = `http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityname}`;
        const res = await fetch(url);
        
        const data = await res.json();
        console.log(data);
        putData(data);
    } catch (error) {
        console.log("Error: ",error);
    }
}

function putData(data){
    
    city.innerHTML=`${data.location.name}`;
    area.innerHTML= `${data.location.region}`;
    country.innerHTML= `${data.location.country}`;
    lat.innerHTML= `Lattitude: ${data.location.lat}°`;
    long.innerHTML=`Longitude: ${data.location.lon}°`;
    let now = new Date();
    date.innerHTML= datebuilder(now);
    temp.innerHTML= `${data.current.temp_c} °C`;
    windspeed.innerHTML=  `Wind Speed: ${data.current.wind_kph} km/h ${data.current.wind_dir}`;
    humidity.innerHTML= `Humidity: ${data.current.humidity}%`;
    visibility.innerHTML= `Visibility: ${data.current.vis_km} km`;
}

function datebuilder(d){
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      return `${day} , ${date} ${month} ${year}`;
}



// {
//     "location": {
//         "name": "London",
//         "region": "City of London, Greater London",
//         "country": "United Kingdom",
//         "lat": 51.5171,
//         "lon": -0.1062,
//         "tz_id": "Europe/London",
//         "localtime_epoch": 1738624360,
//         "localtime": "2025-02-03 23:12"
//     },
//     "current": {
//         "last_updated_epoch": 1738623600,
//         "last_updated": "2025-02-03 23:00",
//         "temp_c": 6.1,
//         "temp_f": 43,
//         "is_day": 0,
//         "condition": {
//             "text": "Mist",
//             "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
//             "code": 1030
//         },
//         "wind_mph": 5.4,
//         "wind_kph": 8.6,
//         "wind_degree": 199,
//         "wind_dir": "SSW",
//         "pressure_mb": 1024,
//         "pressure_in": 30.24,
//         "precip_mm": 0,
//         "precip_in": 0,
//         "humidity": 93,
//         "cloud": 100,
//         "feelslike_c": 4.3,
//         "feelslike_f": 39.7,
//         "windchill_c": 3,
//         "windchill_f": 37.4,
//         "heatindex_c": 5,
//         "heatindex_f": 41,
//         "dewpoint_c": 4.8,
//         "dewpoint_f": 40.6,
//         "vis_km": 1.4,
//         "vis_miles": 0,
//         "uv": 0,
//         "gust_mph": 10.8,
//         "gust_kph": 17.4
//     }
// }