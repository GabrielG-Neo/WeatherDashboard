var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");

button.addEventListener("click", function() {
fetch("http://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=7bf549fe012f11d0d2b454d903e7e46a")
        .then(response => response.json())
        .then(data => {
            var nameValue = data["name"];
            var tempValue = data["main"]["feels_like", "humidity", "pressure","temp"];
            var descValue = data["weather"][0]["description"];
            var windValue = data["wind"]["speed"];
            console.log(data);
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
            wind.innerHTML = windValue;
        })
    });