const container = document.querySelector(".container"),
inputPart = document.querySelector(".input-part"),
inputField = inputPart.querySelector("input"),
display = container.querySelector(".output"),
icon = display.querySelector("img");

let api;

inputField.addEventListener("keypress", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});



function requestApi(city){
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6d055e39ee237af35ca066f35474e9df`;
    fetchData();
}

function fetchData(){
    fetch(api).then(res => res.json()).then(result => weatherDetails(result));
}

function weatherDetails(info){
        const city = info.name;
        const {main, id} = info.weather[0];
        const {feels_like} = info.main;
        if(id == 800){
            icon.src = "icons/clear.svg";
        }else if(id >= 200 && id <= 232){
            icon.src = "icons/storm.svg";  
        }else if(id >= 600 && id <= 622){
            icon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            icon.src = "icons/haze.svg";
        }else if(id >= 801 && id <= 804){
            icon.src = "icons/cloud.svg";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            icon.src = "icons/rain.svg";
        }
        
        display.querySelector(".temp .numb").innerText = Math.floor(feels_like);
        display.querySelector(".weather").innerText =  main;
        display.querySelector(".location span").innerText = ` in ${city}`;
       container.classList.add("active");
    }
;
