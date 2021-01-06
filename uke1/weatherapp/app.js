  let request = new XMLHttpRequest();
  request.open("GET", "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=51.5&lon=0");
  request.send();
  request.onload = () => {
      console.log(request);
      if (request.status == 200) {
          console.log(JSON.parse(request.response));
          document.getElementById("root").innerHTML = (JSON.parse(request.response))
      } else {
          console.log(`error ${request.status} ${request.statusText}`)
      }
  }
