

function getWeatherData(city) {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0f366f669e146bcb2a104832230404&q=${city}&days=3&aqi=no&alerts=no`)
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    console.log(json.current.condition.icon)

    $(".weatherInfo-City").text(json.location.name);
    $(".Temperature").text(json.current.temp_c);
    
    const date = new Date(json.location.localtime);

    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    console.log(formattedDate);
    $(".weatherInfo-Date").text(formattedDate);

    $(".weatherInfo-Condition").text(json.current.condition.text);

    const elements = $(".restInfo-Row-Container-Temp");
    console.log(elements);
    const elementsImages = $(".restInfo-Row-Container-Image");
    console.log(elements);

    console.log('imhere')
    options = {
      weekday: "long"
    };

    elementsImages[0].src = json.current.condition.icon;
    for (let i = 0; i < 2; i++) {
      date.setDate(date.getDate() + i+1); // Set date to next day 

      const nextDayName = date.toLocaleDateString("en-US", options);
      console.log(elements[i+1])
      elements[i+1].textContent = nextDayName;
      elementsImages[i+1].src = json.forecast.forecastday[i+1].day.condition.icon;
    }  
  });
}

