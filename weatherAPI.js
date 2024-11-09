const API_KEY="1ff64541751a3b952b69c41670404d4d";
console.log("hi");


function renderWeatherInfo(data){
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} C`

    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    // let latitude=15.3333;
    // let longitude=74.0833;
    
    let city="goa";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data=await response.json();
    console.log("Weather data:-> " ,data);

    

    renderWeatherInfo(data);

}