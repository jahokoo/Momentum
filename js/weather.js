const API_KEY = "6b8d9faf0684b29a73972bb1c7cd105a";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in",lat,lon);
    // 템플릿 리터럴로 lat,lon,api_key를 넣어주자
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    // HTTP 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있음
    fetch(url).then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city= document.querySelector("#weather span:last-child")
    
        city.innerText= data.name
        weather.innerText = `${data.weather[0].main}`
    });
}

function onGeoError(){
    alert("Can't find you No Weather for you.");
}

// getCurrentPosition으로 현재 위치를 알수있다.
// 2개의 파라미터 >>  1.성공 2. 실패
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
