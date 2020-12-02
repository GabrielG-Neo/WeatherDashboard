var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");

button.addEventListener("click", function() {
fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=7bf549fe012f11d0d2b454d903e7e46a")
        .then(response => response.json())
        .then(data => {
            var nameValue = data["name"];
            var tempValue = data["main"]["temp", "feels_like","temp_min", "temp_max"];
            var descValue = data["weather"][0]["description"];
            var windValue = data["wind"]["speed"];
            
            name.innerHTML = nameValue;
            desc.innerHTML = "Clouds: " +descValue;
            temp.innerHTML = "Tempature: " +tempValue;
            wind.innerHTML = "Winds: " +windValue;
            console.log(data);
        })
    });

