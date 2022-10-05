function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=32ba0bfed592484379e51106cef3f204')
.then(response => response.json())
.then(data => {

    //Getting the min and max values for each day
    for(i = 0; i<7; i++){
        document.getElementById("day"+(i+1)+"Min").innerHTML ="Mintemp:"+Number(data.list[i].main.temp_min-273.15).toFixed(2)+"°";
        //Number(1.3450001).toFixed(2); // 1.35
    }

    for(i = 0; i<7; i++){
        document.getElementById("day"+(i+1)+"Max").innerHTML ="Maxtemp:"+Number(data.list[i].main.temp_max-273.15).toFixed(2)+"°";
    }
    //------------------------------------------------------------

    //Getting Weather Icons
    for(i = 0; i<7; i++){
        document.getElementById("img"+(i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon
        +".png";
    }
    //------------------------------------------------------------

    //getting humidity
    for(i=0;i<7;i++){
        document.getElementById("day"+(i+1)+"hum").innerHTML ="Humidity:"+Number(data.list[i].main.humidity)+"%";
    }
    //------------------------------------------------------------

    //getting wind speed
    for(i=0;i<7;i++){
        document.getElementById("day"+(i+1)+"speed").innerHTML ="WindSpeed:"+Number(data.list[i].wind.speed)+"miles/hour";
    }

    console.log(data)

})
.catch(err => alert("Something Went Wrong: Try Checking Your Internet Coneciton"))
}
function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Delhi";
    GetInfo();
}
//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day+d.getDay()>6){
        return day+d.getDay()-7;
    }
    else{
        return day+d.getDay();
    }
}
    for(i = 0; i<7; i++){
        document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
    }
              
    var xValues = [1,2,3,4,5,6,7];
    new Chart("myChart", {
    type: "line",
    data: {
    labels: xValues,
    datasets: [{ 
      data: [30.05,30.29,27.60,25.10,24.38,25.72,30.20],
      borderColor: "red",
      fill: false
    },{ 
      data: [32.51,30.78,28.42,25.10,24.38,25.72,30.20],
      borderColor: "green",
      fill: false
    }, { 
      data: [58,57,66,79,82,76,55],
      borderColor: "blue",
      fill: false
    },{
            data: [2.15,2.9,4.09,4.56,3.63,4.22,3.4],
            borderColor: "white",
            fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
