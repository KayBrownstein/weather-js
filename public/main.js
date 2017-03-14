let latitude = 42.35;
let longitude = -71.07;


fetch(`/api/v1/forecast/${latitude},${longitude}`)
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(body => {
    console.log(body);
    let bodyParsed = JSON.parse(body);
    console.log(bodyParsed.currently.apparentTemperature);
    let mainDiv = document.getElementById('main');
    mainDiv.innerHTML += bodyParsed.currently.apparentTemperature;
  })
  .catch(error => console.error(`Error in fetch: ${error.message}`));
