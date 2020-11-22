var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function() {
fetch("http://api.openweathermap.org/data/2.5/forecast?q=524901&appid=7bf549fe012f11d0d2b454d903e7e46a")
        .then(response => response.json())
        .then(data => console.log(data))
});