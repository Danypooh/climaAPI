let lat;
let long;

function getMyIpHttp() {
    let lat = document.getElementById('lat').value;
    let lon = document.getElementById('lon').value;

    var request = new XMLHttpRequest();
    
    // Open a new connection, using GET request on the URL endpoint
    // Asincronas
  
    request.onload = function (resp) {
      console.log(resp.target.response);
      console.log(JSON.parse(resp.target.response)); //solo lo que se necesita

      var data = JSON.parse(resp.target.response);
      console.log(data.name);
      console.log(data.main.temp);

      document.getElementById('temp').textContent = "Temperatura: " + data.main.temp;
  }

  request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=26f8b4a50fee28d18336355c788a0848`, true);  
  request.send();
}