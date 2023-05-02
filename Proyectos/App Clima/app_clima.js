window.addEventListener('load', ()=>{
    let lon
    let lat
    var mykey = config.MY_KEY;

    let temp_Value = document.getElementById('temperatura_value');
    let temp_Desc = document.getElementById('temperature_description');
    let location_value = document.getElementById('location');
    let speed_wind_value = document.getElementById('speed_wind');
    let humidity_value = document.getElementById('humidity');
    let animated_icon_value = document.getElementById('animated_icon');
    
    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( position_act => {
        lon = position_act.coords.longitude
        console.log(lon.toFixed(2))
        lat = position_act.coords.latitude
        console.log(lat.toFixed(2))

        //const url = `https://api.openweathermap.org/data/3.0/weather?lat={lan}&lon={lon}&appid=APPI_KEY&units=metric&lang=es`
        //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.6&lon=-58.43&appid=APPI_KEY&units=metric'
        //var LatLon = {lat,lon}
        //console.log(LatLon.lat, LatLon.lon)
        //var LatLon2 = (LatLon.lat).toFixed(2)+","+(LatLon.lon).toFixed(2)
        //console.log(LatLon2)
        //const url = 'http://api.weatherapi.com/v1/current.json?key=APPI_KEY&q={LatLon}'
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=es&APPID='+ mykey;
        console.log(url)
        

         fetch(url)
            .then(response => { return response.json() })
            .then( data => {
                console.log(data)
                //let temp = Math.round(data.current.temp_c)
                let temp = Math.round(data.main.temp)
                temp_Value.textContent = `${temp} ºC`
                //console.log(data.weather[0].description)
                //let Up_Desc = data.current.condition.text
                let Up_Desc = data.weather[0].description
                temp_Desc.textContent = Up_Desc.toUpperCase()
                //location_value.textContent = data.location.country
                location_value.textContent = data.name
                //speed_wind_value.textContent = `${data.wind_kph}`
                speed_wind_value.textContent = `${data.wind.speed} m/s`
                //humidity_value.textContent = `${data.humidity}`
                humidity_value.textContent = `${data.main.humidity} %`
                
                //switch (data.current.condition.text) {
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      animated_icon_value.src='animated/thunder.svg'
                      break;
                    case 'Drizzle':
                      animated_icon_value.src='animated/rainy-2.svg'
                      break;
                    case 'Rain':
                      animated_icon_value.src='animated/rainy-7.svg'
                      break;
                    case 'Snow':
                      animated_icon_value.src='animated/snowy-6.svg'
                      break;                        
                    case 'Clear':
                      animated_icon_value.src='animated/day.svg'
                      break;
                    case 'Atmosphere':
                      animated_icon_value.src='animated/weather.svg'
                      break;  
                    case 'Clouds':
                      animated_icon_value.src='animated/cloudy-day-1.svg'
                      break;  
                    default:
                      animated_icon_value.src='animated/cloudy-day-1.svg'
                  }
                
             })
             .catch( error => {
                 console.log(error)
             })
        })
    }
})
